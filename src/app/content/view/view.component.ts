import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Item, ItemService } from 'src/app/service/content/impl/content.service';
import { DialogFormComponent, IFieldModel } from 'src/app/shared/dialog-form/dialog-form.component';
import { PopupMenuComponent } from 'src/app/shared/popup-menu/popup-menu.component';
import { UpdateDescriptionDialogComponent } from './update-description-dialog/update-description-dialog.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild(PopupMenuComponent) popupMenu: PopupMenuComponent;

  element: Item;
  video: SafeResourceUrl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const url = this.router.url;
      const args = url.split('/');
      args.shift();
      args.shift();
      this.loadPageContent(url.length > 0 ? args : []);
    });
  }

  loadPageContent(path: string[]) {
    if (path.length > 1) {
      path.pop();
      this.itemService.getIdForPath(path).subscribe(result => {
        if (result && result.element) {
          this.element = result.element;
          this.updateVideo();
        }
      });
    }
  }

  updateVideo() {
    const url = this.element.video;
    if (url != null && url.length > 0) {
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(url.replace("watch?v=", "embed/"));
    } else {
      this.video = undefined;
    }
  }

  displayDescription() {
    const description = this.element.description;
    return description != undefined && description.trim().length > 0;
  }

  displayVideo() {
    const video = this.element.video;
    return video != undefined && video.trim().length > 0;
  }

  editName(event: MouseEvent) {
    this.popupMenu.fields = [{
      name: 'Name',
      leftClick: (() => {
        const dialog = this.dialog.open(DialogFormComponent);
        dialog.componentInstance.title = "Edit name";
        dialog.componentInstance.fields = [{
          id: 'name',
          name: 'Name',
          inputType: 'text',
          value: this.element.name,
        }];
        dialog.componentInstance.submit = () => {
          this.element.name = dialog.componentInstance.getValue('name');
          this.itemService.updateElement(this.element._id, this.element).subscribe(() => {
            window.history.back();
          });
          dialog.close();
        }
      }).bind(this)
    },{
      name: 'Description',
      leftClick: (() => {
        import('./update-description-dialog/update-description-dialog.module')
          .then(importedModule => importedModule.UpdateDescriptionDialogModule)
          .then(moduleType => this.dialog.open(moduleType.component))
          .then(ref => {
            ref.componentInstance.setHtml(this.element.description);
            ref.afterClosed().subscribe(dialog => {
              if (dialog) {
                this.element.description = ref.componentInstance.html || "";
                this.itemService.updateElement(this.element._id, this.element).subscribe();
              }
            });
          });
         /*
        const dialog = this.dialog.open(DialogFormComponent);
        dialog.componentInstance.title = "Edit description";
        dialog.componentInstance.fields = [{
          id: 'description',
          name: 'Description',
          model: IFieldModel.EDITOR,
          style: 'width: 80em',
          value: this.element.description,
        }];
        dialog.componentInstance.submit = () => {
          this.element.description = dialog.componentInstance.fields[0].value as string;
          this.itemService.updateElement(this.element._id, this.element).subscribe();
          dialog.close();
        }
      */
      }).bind(this)
    },{
      name: 'Video',
      leftClick: (() => {
        const dialog = this.dialog.open(DialogFormComponent);
        dialog.componentInstance.title = "Edit video";
        dialog.componentInstance.fields = [{
          id: 'video',
          name: 'Video',
          inputType: 'text',
          style: 'width: 40em',
          value: this.element.video,
        }];
        dialog.componentInstance.submit = () => {
          this.element.video = dialog.componentInstance.getValue('video');
          this.itemService.updateElement(this.element._id, this.element).subscribe();
          dialog.close();
          this.updateVideo();
        }
      }).bind(this)
    }]
    this.popupMenu.openMenu(event);
  }
}