import { Component, ContentChild, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
