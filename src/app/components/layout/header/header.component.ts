import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../../../service/search-bar.service';
import { MenuIndexs, MenuService } from 'src/app/service/menu/menu.service';
import { themes, ThemeService } from 'src/app/service/theme.service';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent, IFieldModel } from 'src/app/shared/dialog-form/dialog-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "CraftVenture Helper";

  lastRoute: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    public searchBar: SearchBarService,
    public menuService: MenuService,
    public themeService: ThemeService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/") {
          this.lastRoute = undefined;
        } else {
          const url = decodeURIComponent(event.url.replace(/\+/g, ' '));
          this.lastRoute = url.substring(0, url.length - url.split("/").pop().length);
        }
      }
    });

    this.menuService.setMenu(MenuIndexs.ITEMS, { name: 'Items', routerLink: "/item" });
    this.menuService.setMenu(MenuIndexs.EVENTS, { name: 'Events', routerLink: "/event" });
    this.menuService.setMenu(MenuIndexs.ARCHIVEMENTS, { name: 'Archivements', routerLink: "/archivement" });

    this.menuService.setMenu(MenuIndexs.SETTINGS, {
      name: undefined,
      icon: 'settings',
      class: 'rotateIcon'
    });
    this.menuService.addElement(MenuIndexs.SETTINGS, {
      name: 'Theme',
      click: this.openThemeSettings.bind(this)
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

  openThemeSettings() {
    const dialog = this.dialog.open(DialogFormComponent);
    const instance = dialog.componentInstance;
    instance.title = "Theme Settings";
    instance.fields = [
      {
        id: 'theme',
        name: 'Theme',
        model: IFieldModel.SELECT,
        value: themes.map(theme => theme.name),
        placeholder: this.themeService.currentTheme.name,
        onChange: (() => {
          this.themeService.setCurrentTheme(this.themeService.getThemeByName(instance.getValueSelected('theme')));
        }).bind(this)
      },
      {
        id: 'background',
        model: IFieldModel.CHECKBOX,
        value: this.themeService.matBackground,
        placeholder: 'Background',
        onChange: (() => {
          console.log('change ' + instance.getValueBoolean('background'));
          this.themeService.setMatBackground(instance.getValueBoolean('background'));
        }).bind(this)
      }
    ];
  }
}
