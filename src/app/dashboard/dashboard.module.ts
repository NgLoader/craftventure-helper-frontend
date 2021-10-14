import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ImageViewModule } from '../shared/image-view/image-view.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ImageViewModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent,
    }])
  ]
})
export class DashboardModule { }
