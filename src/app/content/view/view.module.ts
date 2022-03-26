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
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PopupMenuModule } from 'src/app/shared/popup-menu/popup-menu.module';
import { QuillModule } from 'ngx-quill';
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize";
import Emoji from "quill-emoji";

@NgModule({
  declarations: [ViewComponent],
  imports: [
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
    QuillModule.forRoot({
      customOptions: [{
        import: 'formats/font',
        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
      }],
      customModules: [
        {
          implementation: ImageDrop,
          path: "modules/ImageDrop",
        },
        {
          implementation: ImageResize,
          path: "modules/ImageResize",
        },
        {
          implementation: Emoji,
          path: 'modules/emoji'
        }
      ],
    }),
    RouterModule.forChild([{
      path: '',
      component: ViewComponent,
    }])
  ]
})
export class ViewModule { }
