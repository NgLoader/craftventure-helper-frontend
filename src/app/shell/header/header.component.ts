import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs-compat';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ItemService } from 'src/app/service/content/impl/content.service';
import { ThemeService } from 'src/app/service/theme.service';
import { MenuIndexs, MenuService } from '../../service/menu/menu.service';
import { DialogThemeSelectComponent } from './dialog-theme-select/dialog-theme-select.component';

interface InputValue {
  id: string,
  categoryId: string,
  type: string,
  name: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public screenSize = document.body.offsetWidth;

  public searchbarVisiblity: boolean = true;
  public searchbarValue: string = "";
  public searchbarUpdate: EventEmitter<string> = new EventEmitter();

  public searchbarControl = new FormControl();
  public searchbarFilteredOptions: Observable<InputValue[]>;

  private searchRequest: Subscription;

  constructor(
    private router: Router,
    public authService: AuthService,
    public menuService: MenuService,
    public themeService: ThemeService,
    public itemService: ItemService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog) {
    this.menuService.setMenu(MenuIndexs.WIKI, {
      name: 'Wiki',
    });
    this.menuService.addElement(MenuIndexs.WIKI, {
      name: 'Overview',
      routerLink: '/c',
    });
    this.itemService.getCategorys({ }).subscribe(items => {
      for (const item of items) {
        this.menuService.addElement(MenuIndexs.WIKI, {
          name: item.name,
          routerLink: '/c/' + item.name,
        });
      }
    });

    this.menuService.setMenu(MenuIndexs.THEME, {
      name: undefined, icon: "format_color_fill", click: (() => {
        const dialogTheme = this.dialog.open(DialogThemeSelectComponent);
        dialogTheme.componentInstance.themeService = this.themeService;
      }).bind(this)
    });

    this.menuService.setMenu(MenuIndexs.SETTINGS, {
      name: undefined,
      icon: 'settings',
      class: 'rotateIcon'
    });
    this.menuService.addElement(MenuIndexs.SETTINGS, {
      name: 'Toggle Editor',
      click: (() => {
        this.authService.setEditing(!this.authService.isInEditing());
        this.snackbar.open(`Editormode ${this.authService.isInEditing() ? 'on' : 'off'}`, 'Close', {
          duration: 5000
        });
      }).bind(this),
      hidden: () => { return !this.authService.isLoggedIn() }
    });
    this.menuService.addElement(MenuIndexs.SETTINGS, {
      name: 'Admin',
      routerLink: '/admin',
      hidden: () => { return !this.authService.isLoggedIn() }
    });
    this.menuService.addElement(MenuIndexs.SETTINGS, {
      name: 'Logout',
      click: (() => {
        this.authService.logout();
      }).bind(this),
      hidden: () => { return !this.authService.isLoggedIn() }
    });
    this.menuService.addElement(MenuIndexs.SETTINGS, {
      name: 'Login',
      routerLink: '/login',
      hidden: () => { return this.authService.isLoggedIn() }
    });
  }

  ngOnInit() {
    const subject = new BehaviorSubject<InputValue[]>([]);
    this.searchbarFilteredOptions = subject.asObservable();
    this.searchbarControl.valueChanges
      .subscribe(value => {
        if (this.searchRequest) {
          this.searchRequest.unsubscribe();
        }
        if (value && value.length > 0) {
          this.searchRequest = this.itemService.getSearch({ input: value }).subscribe(result => {
            const values: InputValue[] = [];
            result.categorys.forEach(cateogry => values.push({
              id: cateogry._id,
              categoryId: undefined,
              type: 'category',
              name: cateogry.name
            }));
            result.elements.forEach(element => values.push({
              id: element._id,
              categoryId: element._categoryId,
              type: 'element',
              name: element.name
            }));
            subject.next(values);
          });
        } else {
          subject.next([]);
        }
      });

      const screenSizeChanged = Observable.fromEvent(window, 'resize').throttleTime(500);
      screenSizeChanged.subscribe(() => {
        this.screenSize = document.body.offsetWidth;
      });
  }

  selectInput(value: InputValue, event: Event) {
    this.itemService.getPathForId(value.categoryId || value.id).subscribe(result => {
      const path = ["c"];
      result.reverse().forEach(result => path.push(result.name));
      if (value.categoryId) {
        path.push(value.name);
        path.push('view');
      }
      this.router.navigate(path);
    });
  }
}