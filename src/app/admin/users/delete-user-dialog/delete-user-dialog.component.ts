import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api/api.service';
import { Response } from 'src/app/service/content/content.service';
import { UserInfo } from '../users.component';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss']
})
export class DeleteUserDialogComponent {

  @Input() user: UserInfo
  @Output() onDelete: EventEmitter<void> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  deleteUser() {
    this.httpClient.post<Response>(ApiService.postAccountDelete, {
      id: this.user.id
    }).subscribe(result => {
      if (result && result.success) {
        this.snackBar.open("Successful deleted", undefined, { duration: 4000 });
        this.onDelete.emit();
      } else {
        console.log(result);
        this.onDelete.error(result.errors);
        this.snackBar.open("A error occured by deleting user!", undefined, { duration: 4000 });
      }
    });
  }
}
