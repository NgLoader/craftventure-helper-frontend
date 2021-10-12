import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncImageComponent } from './async-image.component';
import { LoadingModule } from 'src/app/components/layout/loading/loading.module';

@NgModule({
  declarations: [AsyncImageComponent],
  imports: [
    CommonModule,
    LoadingModule
  ],
  exports: [AsyncImageComponent]
})
export class AsyncImageModule { }
