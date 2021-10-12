import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

export interface PopupItem {
  name: string,
  leftClick?: (event: MouseEvent, field: PopupItem) => void;
}

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent {

  @Input() fields: PopupItem[];

  @ViewChild(MatMenuTrigger) private contextMenuTrigger: MatMenuTrigger;

  openMenu(event: MouseEvent) {
    const triggerElement = (this.contextMenuTrigger as any)._element.nativeElement;
    triggerElement.style.setProperty('left', `${event.clientX}px`);
    triggerElement.style.setProperty('top', `${event.clientY}px`);
    triggerElement.style.setProperty('position', 'fixed');
    triggerElement.style.setProperty('visibility', 'hidden');
    this.contextMenuTrigger.menu.focusFirstItem('mouse');
    this.contextMenuTrigger.openMenu();
  }
}