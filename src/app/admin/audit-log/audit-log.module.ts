import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditLogComponent } from './audit-log.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuditLogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AuditLogComponent
    }])
  ]
})
export class AuditLogModule { }
