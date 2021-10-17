import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDescriptionDialogComponent } from './update-description-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [UpdateDescriptionDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FroalaEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateDescriptionDialogModule {
  public static component = UpdateDescriptionDialogComponent;
}
