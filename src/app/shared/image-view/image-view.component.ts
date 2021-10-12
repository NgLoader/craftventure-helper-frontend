import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

export interface ImageViewContentElement {
  parent?: ImageViewContent;

  name?: string;
  id?: string;

  image: string;

  class?: string;

  routerLink?: string;
  leftClick?: (event: MouseEvent, content: ImageViewContentElement) => void;
  rightClick?: (event: MouseEvent, content: ImageViewContentElement) => boolean;

  canView?: () => boolean;
}

export interface ImageViewContent {
  front: ImageViewContentElement;
  back?: ImageViewContentElement;
  flipped?: boolean;
}

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit, OnChanges, OnDestroy {

  @Input() content: ImageViewContent[];

  private refContent: { [value: string]: ImageViewContentElement } = {};
  private refContentIndex = 0;

  private rightClickListener = this.handleRightClick.bind(this);

  ngOnInit(): void {
    document.addEventListener('contextmenu', this.rightClickListener);
  }

  ngOnChanges(): void {
    let index = 0;
    for(const element of this.content) {
      this.addElementRef(element, element.front);
      if (element.back) {
        this.addElementRef(element, element.back);
        if (element.flipped == undefined) {
          element.flipped = false;
        }
      }
    }
  }

  ngOnDestroy() {
    document.removeEventListener('contextmenu', this.rightClickListener);
  }

  private addElementRef(parent: ImageViewContent, element: ImageViewContentElement) {
    element.parent = parent;

    if (!element.id) {
      element.id = `${this.refContentIndex++}`;
    }
    this.refContent[element.id] = element;
  }

  private handleRightClick(event: any) {
    if (!event) {
      return;
    }

    const path: any[] = event.path;
    if (path) {
      for (const element of path) {
        if (element && element.id) {
          const found = this.refContent[element.id];
          if (found && found.rightClick && found.rightClick(event, found)) {
            event.preventDefault();
          }
        }
      }
    }
  }
}
