import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ShellModule } from './shell/shell.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ShellModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '',
      component: AdminComponent
    }])
  ]
})
export class AdminModule { }
