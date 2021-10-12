import { Injectable } from '@angular/core';

export enum MenuIndexs {
  ITEMS,
  EVENTS,
  ARCHIVEMENTS,
  THEME,
  SETTINGS
}

export interface HeaderMenu extends MenuSetting {
  elements?: HeaderMenuElement[];
}

export interface HeaderMenuElement extends MenuSetting {
  routerLink?: string;
  click?(): void;
}

export interface MenuSetting {
  name: string;
  hidden?: () => boolean;
  icon?: string;
  tooltip?: string;
  class?: string;
  routerLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: HeaderMenu[] = [];

  constructor() { }

  setMenu(menuIndex: MenuIndexs, options: HeaderMenu) {
    if (!options.elements) {
      options.elements = [];
    }
    this.menus[menuIndex != undefined ? menuIndex : this.menus.length] = options;
  }

  addElement(menuIndex: MenuIndexs, options: HeaderMenuElement, elementIndex?: number) {
    const index = menuIndex != undefined ? menuIndex : this.menus.length;
    let menu: HeaderMenu = this.menus[index];
    if (menu) {
      const elements: HeaderMenuElement[] = menu.elements;
      elements[elementIndex != undefined ? elementIndex : elements.length] = options;
    }
  }

  getMenu(menuIndex: MenuIndexs): HeaderMenu {
    return this.menus[menuIndex];
  }
}
