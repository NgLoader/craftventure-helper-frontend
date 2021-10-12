import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-async-image',
  templateUrl: './async-image.component.html',
  styleUrls: ['./async-image.component.scss']
})
export class AsyncImageComponent implements AfterViewInit {

  @Input() src: string;
  @Input() alt: string;

  @Input() width: number = 0;
  @Input() height: number = 0;

  @ViewChild('image', { static: true }) image: ElementRef<HTMLImageElement>;

  loaded = false;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.image.nativeElement.onload = () => {
      this.loaded = true;
    };
    this.image.nativeElement.src = this.src;
  }

  getPlaceholderStyle() {
    const element = this.elementRef.nativeElement;
    const width = element.clientWidth;
    const height = element.clientHeight;
    return {
      display: 'block',
      width: `${this.width > 0 ? this.width : width > 0 ? width : 360}px`,
      height: `${this.height > 0 ? this.height : height > 0 ? height : 180}px`,
      animation: 'fadeIn 0.5s'
    }
  }

  getImageStyle() {
    return this.loaded ? this.getPlaceholderStyle() : {
      display: 'none'
    }
  }
}