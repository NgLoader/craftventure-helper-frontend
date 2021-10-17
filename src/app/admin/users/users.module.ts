import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule } from '@angular/material/core';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PopupMenuModule } from 'src/app/shared/popup-menu/popup-menu.module';
import { DialogFormModule } from 'src/app/shared/dialog-form/dialog-form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserPasswordDialogComponent } from './update-user-password-dialog/update-user-password-dialog.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [UsersComponent, UpdateUserDialogComponent, DeleteUserDialogComponent, CreateUserDialogComponent, UpdateUserPasswordDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    PopupMenuModule,
    DialogFormModule,
    RouterModule.forChild([{
      path: '',
      component: UsersComponent
    }])
  ]
})
export class UsersModule { }
