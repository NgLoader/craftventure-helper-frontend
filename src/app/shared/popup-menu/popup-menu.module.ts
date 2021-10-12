import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { PopupMenuComponent } from './popup-menu.component';



@NgModule({
  declarations: [PopupMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [PopupMenuComponent]
})
export class PopupMenuModule { }
