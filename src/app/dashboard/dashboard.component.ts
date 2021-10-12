import { Component, OnInit } from '@angular/core';
import { ImageViewContent } from '../shared/image-view/image-view.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  imageContent: ImageViewContent[] = [
    {
      front: {
        id: "item",
        name: "Items",
        image: "https://cv.wuffy.eu/new/images/items.png",
        routerLink: "/item"
      }
    },
    {
      front: {
        id: "event",
        name: "Events",
        image: "https://cv.wuffy.eu/new/images/event.png",
        routerLink: "/event",
      }
    },
    {
      front: {
        id: "archivement",
        name: "Archivements",
        image: "https://cv.wuffy.eu/new/images/archivements.png",
        routerLink: "/archivement"
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
