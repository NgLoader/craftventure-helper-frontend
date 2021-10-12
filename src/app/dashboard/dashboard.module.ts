import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImageViewModule } from '../shared/image-view/image-view.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ImageViewModule,
    DashboardRoutingModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
