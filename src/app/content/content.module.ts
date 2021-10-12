import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { LoadingModule } from '../components/layout/loading/loading.module';
import { DialogFormModule } from '../shared/dialog-form/dialog-form.module';
import { ImageViewModule } from '../shared/image-view/image-view.module';
import { PopupMenuModule } from '../shared/popup-menu/popup-menu.module';
import { ContentHeaderModule } from '../shared/content-header/content-header.module';
import { CreateItemDialogComponent } from './list/create-item-dialog/create-item-dialog.component';
import { CreateCategoryDialogComponent } from './list/create-category-dialog/create-category-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AsyncImageModule } from '../shared/async-image/async-image.module';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [ListComponent, ViewComponent, CreateItemDialogComponent, CreateCategoryDialogComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ContentHeaderModule,
    LoadingModule,
    DialogFormModule,
    AsyncImageModule,
    ImageViewModule,
    PopupMenuModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTabsModule,
    FroalaViewModule
  ],
  exports: [ListComponent, ViewComponent]
})
export class ContentModule { }
