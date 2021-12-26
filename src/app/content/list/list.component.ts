import { M } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Item, ItemCategory, ItemService } from 'src/app/service/content/impl/content.service';
import { DialogFormComponent } from 'src/app/shared/dialog-form/dialog-form.component';
import { ImageViewContent, ImageViewContentElement } from 'src/app/shared/image-view/image-view.component';
import { PopupMenuComponent } from 'src/app/shared/popup-menu/popup-menu.component';
import { CreateCategoryDialogComponent } from './create-category-dialog/create-category-dialog.component';
import { CreateItemDialogComponent } from './create-item-dialog/create-item-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title: string;
  imageContent: ImageViewContent[];

  private currentCategoryId: string = undefined;

  @ViewChild(PopupMenuComponent) popupMenu: PopupMenuComponent;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.loadPageContent(event.urlAfterRedirects);
    });

    this.loadPageContent(this.router.url);
  }

  loadPageContent(url: string) {
    const args = url.split('/');
    args.shift();
    args.shift();
    const path = url.length > 0 ? args : [];
    if (path.length > 0) {
      this.itemService.getIdForPath(path).subscribe(id => {
        if (id) {
          this.currentCategoryId = id.id;
          this.title = decodeURIComponent(args[args.length - 1]);

          this.itemService.getContent(id.id).subscribe(result => {
            if (result) {
              this.loadContent(result.categorys, result.elements);
            }
          });
        }
      });
    } else {
      this.itemService.getContent(undefined).subscribe(result => {
        if (result) {
          this.currentCategoryId = undefined;
          this.title = "Overview"

          this.loadContent(result.categorys, result.elements);
        }
      });
    }
  }

  loadContent(categorys: ItemCategory[], items: Item[]) {
    const imageContent: ImageViewContent[] = [];
    if (categorys) {
      for (const category of categorys) {
        imageContent.push({
          front: {
            id: category._id,
            name: category.name,
            image: category.image,
            class: 'category',
            routerLink: `${category.name}`,
            rightClick: this.openSetting.bind(this)
          }
        });
      }
    }

    if (items) {
      for (const item of items) {
        imageContent.push({
          front: {
            id: item._id,
            name: item.name,
            image: item.image,
            class: 'item',
            routerLink: `${item.name}/view`,
            rightClick: this.openSetting.bind(this)
          }
        });
      }
    }

    imageContent.push({
      front: {
        name: 'Create Item',
        image: 'assets/image/create_item.png',
        leftClick: this.openCreateItem.bind(this),
        rightClick: this.swapSelection.bind(this),
        canView: this.authService.isInEditing.bind(this),
      },
      back: {
        name: "Create Category",
        image: 'assets/image/create_category.png',
        leftClick: this.openCreateCategory.bind(this),
        rightClick: this.swapSelection.bind(this),
        canView: this.authService.isInEditing.bind(this),
      }
    });

    this.imageContent = imageContent;
  }

  swapSelection(event: MouseEvent, content: ImageViewContentElement) {
    content.parent.flipped = !content.parent.flipped;
    return true;
  }

  openCreateCategory(event: MouseEvent, content: ImageViewContentElement, update = false) {
    if (!this.authService.isInEditing()) {
      return false;
    }

    const dialog = this.dialog.open(CreateCategoryDialogComponent);
    dialog.componentInstance.itemService = this.itemService;
    dialog.componentInstance.content = update ? content : undefined;
    dialog.componentInstance.categoryId = this.currentCategoryId;
    return true;
  }

  openCreateItem(event: MouseEvent, content: ImageViewContentElement, update = false) {
    if (!this.authService.isInEditing()) {
      return false;
    }

    const dialog = this.dialog.open(CreateItemDialogComponent);
    dialog.componentInstance.itemService = this.itemService;
    dialog.componentInstance.content = update ? content : undefined;
    dialog.componentInstance.categoryId = this.currentCategoryId;
    return true;
  }

  openSetting(event: MouseEvent, content: ImageViewContentElement) {
    if (!this.authService.isInEditing()) {
      return false;
    }

    this.popupMenu.fields = [{
      name: 'Update',
      leftClick: (() => {
        if (content.class == "item") {
          this.openCreateItem(event, content, true);
        } else {
          this.openCreateCategory(event, content, true);
        }
      }).bind(this)
    },
    {
      name: 'Delete',
      leftClick: (() => {
        const dialog = this.dialog.open(DialogFormComponent);
        dialog.componentInstance.title = "Delete " + content.name;
        dialog.componentInstance.submitName = "Delete";
        dialog.componentInstance.submit = (() => {
          if (content.class == "item") {
            this.itemService.deleteElement(content.id).subscribe();
          } else {
            this.itemService.deleteCategory(content.id).subscribe();
          }
          dialog.close();
        }).bind(this)
      }).bind(this)
    }];
    this.popupMenu.openMenu(event);
    return true;
  }
}
