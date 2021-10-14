import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ShellModule } from './shell/shell.module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ShellModule,
    RouterModule.forChild([{
      path: '',
      component: AdminComponent
    }])
  ]
})
export class AdminModule { }
