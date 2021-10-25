import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ContentHeaderModule } from 'src/app/shared/content-header/content-header.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PopupMenuModule } from 'src/app/shared/popup-menu/popup-menu.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    RouterModule,
    CommonModule,
    ContentHeaderModule,
    LoadingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    PopupMenuModule,
    FroalaViewModule,
    RouterModule.forChild([{
      path: '',
      component: ViewComponent,
    }])
  ]
})
export class ViewModule { }
