import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDescriptionDialogComponent } from './update-description-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [UpdateDescriptionDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    QuillModule.forRoot()
  ]
})
export class UpdateDescriptionDialogModule {
  public static component = UpdateDescriptionDialogComponent;
}
