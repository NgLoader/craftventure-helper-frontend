import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/service/auth/auth.service';
import { themes, ThemeService } from 'src/app/service/theme.service';
import { MenuIndexs, MenuService } from '../../service/menu/menu.service';
import { DialogThemeSelectComponent } from './dialog-theme-select/dialog-theme-select.component';

export interface DialogThemeSelectData { }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public title: string = "Craftventure";

  constructor(
    public authService: AuthService,
    public menuService: MenuService,
    public themeService: ThemeService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog) {
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
      click: (() => {
         const dialogTheme = this.dialog.open(DialogThemeSelectComponent);
         dialogTheme.componentInstance.themeService = this.themeService;
      }).bind(this)
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
}