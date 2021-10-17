import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ShellModule { }
