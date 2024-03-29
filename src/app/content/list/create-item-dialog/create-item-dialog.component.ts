import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api/api.service';
import { ItemService } from 'src/app/service/content/impl/content.service';
import { ImageViewContentElement } from 'src/app/shared/image-view/image-view.component';

@Component({
  selector: 'app-create-item-dialog',
  templateUrl: './create-item-dialog.component.html',
  styleUrls: ['./create-item-dialog.component.scss']
})
export class CreateItemDialogComponent implements OnInit {

  @Input() itemService: ItemService;
  @Input() content: ImageViewContentElement;
  @Input() categoryId: string;

  name: string = undefined;
  image: string = undefined;
  keywords: string[] = [];
  enabled: boolean = false;

  imageUploadUrl = ApiService.postImageUpload;

  constructor(
    private dialogRef: MatDialogRef<CreateItemDialogComponent>,
		private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    if (this.content) {
      this.itemService.getElements({ _id: this.categoryId }).subscribe(items => {
        if (items) {
          for (const item of items) {
            if (item._id == this.content.id) {
              this.name = item.name;
              this.image = item.image;
              this.keywords = item.keywords;
              this.enabled = item.enabled;
              break;
            }
          }
        }
      });
    }
  }

  submit() {
    if (this.content) {
      this.itemService.updateElement(this.content.id, {
        name: this.name,
        image: this.image,
        keywords: this.keywords,
        enabled: this.enabled
      }).subscribe(response => {
        if (response) {
          this.dialogRef.close();
        }
      });
    } else {
      this.itemService.createElement(this.categoryId, {
        name: this.name,
        image: this.image,
        keywords: this.keywords,
        enabled: this.enabled
      }).subscribe(response => {
        if (response) {
          this.dialogRef.close();
        }
      });
    }
  }

  addKeywords(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.keywords.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeKeywords(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  onFileSelected(event: any): void {
    const files = event.target?.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('img', files[0]);
      this.httpClient.post(ApiService.postImageUpload, formData).subscribe(res => {
        if (res && res instanceof Array && res.length > 0) {
          this.image = `${ApiService.getImage}/${res[0].filename}`;
        }
      }, error => {
        console.log(error);
      });
    }
  }
}
