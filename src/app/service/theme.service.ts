import { Injectable } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

export interface Theme {
  name: string;
  className: string;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
}

export let themes: Theme[] = [
  {
    name: 'Dark',
    className: 'dark-theme'
  },
  {
    name: 'Blue',
    className: 'blue-theme'
  },
  {
    name: 'Candy',
    className: 'candy-theme'
  },
  {
    name: 'CV',
    className: 'cv-theme'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly defaultTheme = themes[3];
  private theme: Theme = this.defaultTheme

  private background: boolean = true;

  constructor() { }

  private updateTheme(theme: Theme) {
    document.body.classList.value = `${this.background ? 'mat-app-background' : ''} ${theme.className}`;
  }

  loadStyle() {
    this.setCurrentTheme(this.getThemeByClassName(window.localStorage.getItem('theme-name')));

    const background = localStorage.getItem('theme-background');
    this.setMatBackground(background && background == 'false' ? false : true);
  }

  toggleMatBackground() {
    this.setMatBackground(!this.matBackground);
  }
  
  get currentTheme(): Theme {
    return this.theme;
  }

  setCurrentTheme(theme: Theme) {
    this.theme = theme;
    this.updateTheme(this.theme);
    window.localStorage.setItem('theme-name', this.theme.className);
  }

  get matBackground(): boolean {
    return this.background;
  }

  setMatBackground(background: boolean) {
    this.background = background;
    this.updateTheme(this.theme);
    window.localStorage.setItem('theme-background', `${this.background}`);
  }

  getThemeByClassName(className: string): Theme {
    if (!className) {
      return this.defaultTheme;
    }

    className = className.toLowerCase();
    for (let theme of themes) {
      if (theme.className.toLowerCase() === className) {
        return theme;
      }
    }
    return this.defaultTheme;
  }

  getThemeByName(name: string): Theme {
    if (!name) {
      return this.defaultTheme;
    }

    name = name.toLowerCase();
    for (let theme of themes) {
      if (theme.name.toLowerCase() === name) {
        return theme;
      }
    }
    return this.defaultTheme;
  }
}