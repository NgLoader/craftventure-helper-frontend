import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewComponent } from './image-view.component';
import { MatCardModule } from '@angular/material/card';
import { AsyncImageModule } from '../async-image/async-image.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ImageViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AsyncImageModule,
    RouterModule
  ],
  exports: [ImageViewComponent]
})
export class ImageViewModule { }
