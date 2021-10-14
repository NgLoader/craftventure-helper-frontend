import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shell/layout/layout.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          {
              path: '',
              loadChildren: () => import('./admin.module').then(child => child.AdminModule)
          },
          {
              path: 'users',
              loadChildren: () => import('./users/users.module').then(child => child.UsersModule)
          },
          {
              path: 'audit-log',
              loadChildren: () => import('./audit-log/audit-log.module').then(child => child.AuditLogModule)
          }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
