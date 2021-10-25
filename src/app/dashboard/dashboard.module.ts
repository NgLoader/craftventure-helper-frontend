import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { AsyncImageModule } from '../shared/async-image/async-image.module';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AsyncImageModule,
    LoadingModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent,
    }])
  ]
})
export class DashboardModule { }
