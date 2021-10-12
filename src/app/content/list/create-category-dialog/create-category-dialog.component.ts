import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/service/content/impl/content.service';
import { ImageViewContentElement } from 'src/app/shared/image-view/image-view.component';
import { CreateItemDialogComponent } from '../create-item-dialog/create-item-dialog.component';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss']
})
export class CreateCategoryDialogComponent implements OnInit {

  @Input() itemService: ItemService;
  @Input() content: ImageViewContentElement;
  @Input() categoryId: string;

  name: string = undefined;
  image: string = undefined;
  keywords: string[] = [];
  enabled: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<CreateItemDialogComponent>
  ) { }

  ngOnInit(): void {
    if (this.content) {
      this.itemService.getCategorys({ _id: this.categoryId }).subscribe(categorys => {
        if (categorys) {
          for (const category of categorys) {
            if (category._id == this.content.id) {
              this.name = category.name;
              this.image = category.image;
              this.keywords = category.keywords;
              this.enabled = category.enabled;
              break;
            }
          }
        }
      });
    }
  }

  submit() {
    console.log(this.enabled);
    if (this.content) {
      this.itemService.updateCategory(this.content.id, {
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
      this.itemService.createCategory(this.categoryId, {
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
}
