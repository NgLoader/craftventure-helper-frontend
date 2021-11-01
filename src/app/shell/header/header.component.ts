import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ThemeService } from 'src/app/service/theme.service';
import { MenuIndexs, MenuService } from '../../service/menu/menu.service';
import { DialogThemeSelectComponent } from './dialog-theme-select/dialog-theme-select.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchbarVisiblity: boolean = true;
  public searchbarValue: string = "";
  public searchbarUpdate: EventEmitter<string> = new EventEmitter();

  public searchbarControl = new FormControl();
  public searchbarOptions: string[] = ['category: ', 'name: ', 'place: '];
  public searchbarFilteredOptions: Observable<string[]>;

  constructor(
    public authService: AuthService,
    public menuService: MenuService,
    public themeService: ThemeService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog) {
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
    this.searchbarFilteredOptions = this.searchbarControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.searchbarFilter(value))
      );
  }

  private searchbarFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchbarOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
}