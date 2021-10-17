import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api/api.service';
import { Response } from 'src/app/service/content/content.service';
import { PopupMenuComponent } from 'src/app/shared/popup-menu/popup-menu.component';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';
import { UpdateUserPasswordDialogComponent } from './update-user-password-dialog/update-user-password-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['_id', 'name', 'email', 'role', 'createdAt', 'updatedAt'];
  data: UserInfo[] = [];

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(PopupMenuComponent) popupMenu: PopupMenuComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private onUpdate: EventEmitter<void> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page, this.onUpdate)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          return this.httpClient.post<Response>(ApiService.postAccountSearch, {
            sort: this.sort.active,
            order: this.sort.direction,
            page: this.paginator.pageIndex,
            limit: this.paginator.pageSize
          }).pipe(catchError(() => observableOf(null)));
        }),
        map(result => {
          this.isLoadingResults = false;
          if (result === null || !result.success) {
            console.log(result.errors);
            return [];
          }

          const data: ResponseData = result.content;
          this.resultsLength = data.total_count;
          return data.users;
        })).subscribe(data => this.data = data);
  }

  createUser(event: MouseEvent) {
    const dialog = this.dialog.open(CreateUserDialogComponent);
    dialog.componentInstance.onCreate.subscribe(() => {
      dialog.close();
      this.onUpdate.emit();
    });
  }

  editUser(event: MouseEvent, user: UserInfo) {
    this.popupMenu.fields = [
      {
        name: "Update profile",
        leftClick: (() => {
          const dialog = this.dialog.open(UpdateUserDialogComponent);
          dialog.componentInstance.id = user.id;
          dialog.componentInstance.username = user.profile.name;
          dialog.componentInstance.email = user.email;
          dialog.componentInstance.role = user.role;
          dialog.componentInstance.onUpdate.subscribe(() => {
            dialog.close();
            this.onUpdate.emit();
          });
        }).bind(this)
      },{
        name: "Update password",
        leftClick: (() => {
          const dialog = this.dialog.open(UpdateUserPasswordDialogComponent);
          dialog.componentInstance.id = user.id;
          dialog.componentInstance.onUpdate.subscribe(() => {
            dialog.close();
            this.onUpdate.emit();
          });
        }).bind(this)
      },
      {
        name: "Delete",
        leftClick: (() => {
          const dialog = this.dialog.open(DeleteUserDialogComponent);
          dialog.componentInstance.user = user;
          dialog.componentInstance.onDelete.subscribe(() => {
            dialog.close();
            this.onUpdate.emit();
          });
        }).bind(this)
      }
    ];
    this.popupMenu.openMenu(event);
  }
}

export interface ResponseData {
  users: UserInfo[];
  total_count: number;
}

export interface UserInfo {
  id: string;
  email: string;
  role: string;
  profile: {
    name: string;
  }
  createdAt: Date,
  updatedAt: Date
}
