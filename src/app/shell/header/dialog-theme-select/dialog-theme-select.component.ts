import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Theme, themes, ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-dialog-theme-select',
  templateUrl: './dialog-theme-select.component.html',
  styleUrls: ['./dialog-theme-select.component.scss']
})
export class DialogThemeSelectComponent implements OnInit {

  @Input() themeService: ThemeService;

  public themes = themes;
  public selected: string;
  public rollbackTheme: Theme;
  public rollbackBackground: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogThemeSelectComponent>
  ) { }

  ngOnInit(): void {
    this.selected = this.themeService.currentTheme.className;
    this.rollbackTheme = this.themeService.currentTheme;
    this.rollbackBackground = this.themeService.matBackground;
  }

  onSelectionChanged(event: MatSelectChange) {
    this.themeService.setCurrentTheme(this.themeService.getThemeByClassName(event.value));
  }

  onBackgroundChanged(event: MatCheckboxChange) {
    this.themeService.setMatBackground(event.checked);
  }

  onCloseClick() {
    this.dialogRef.close();
    this.themeService.setCurrentTheme(this.rollbackTheme);
    this.themeService.setMatBackground(this.rollbackBackground);
  }

  onApplyClick() {
    this.dialogRef.close();
  }
}
