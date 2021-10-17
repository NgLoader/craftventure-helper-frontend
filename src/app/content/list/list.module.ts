import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { CreateCategoryDialogComponent } from './create-category-dialog/create-category-dialog.component';
import { CreateItemDialogComponent } from './create-item-dialog/create-item-dialog.component';
import { ContentHeaderModule } from 'src/app/shared/content-header/content-header.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { ImageViewModule } from 'src/app/shared/image-view/image-view.module';
import { PopupMenuModule } from 'src/app/shared/popup-menu/popup-menu.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { DialogFormModule } from 'src/app/shared/dialog-form/dialog-form.module';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AsyncImageModule } from 'src/app/shared/async-image/async-image.module';
import { ContentRoutingModule } from '../content-routing.module';



@NgModule({
  declarations: [ListComponent, CreateCategoryDialogComponent, CreateItemDialogComponent],
  imports: [
    RouterModule,
    CommonModule,
    ContentHeaderModule,
    LoadingModule,
    ImageViewModule,
    PopupMenuModule,
    DialogFormModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '',
      component: ListComponent,
    }])
  ]
})
export class ListModule { }
