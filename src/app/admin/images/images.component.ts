import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api/api.service';
import { PopupMenuComponent } from 'src/app/shared/popup-menu/popup-menu.component';

export interface ResponseData {
  images: ImageInfo[];
  total_count: number;
}

export interface ImageInfo {
  id: string;
  length: number,
  chunkSize: number,
  filename: string,
  contentType: string,
  uploadAt: Date,
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements AfterViewInit {

  displayedColumns: string[] = ['_id', 'name', 'contentType', 'length', 'uploadDate'];
  data: ImageInfo[] = [];

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

          return this.httpClient.post<Response>(ApiService.postImageSearch, {
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
          return data.images;
        })).subscribe(data => this.data = data);
  }

  createImage(event: MouseEvent) {
  }

  editUser(event: MouseEvent, user: ImageInfo) {
  }

  fromBytes(bytes: number, decimals = 2) {
    console.log(bytes);
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
