import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  public loaded: boolean = false;

  @ViewChild('image') image: ElementRef<HTMLDivElement>;

  constructor() { }

  ngAfterViewInit() {
    const image = new Image();
    image.onload = () => {
      const style = this.image.nativeElement.style;
      style.backgroundImage = `url('${image.src}')`;
      style.animation = "fadeIn 2s";
      this.loaded = true;
    }
    image.src = "/assets/image/background.png";
  }

  getImageStyle() {
    return this.loaded ? { } : {
      display: 'none'
    }
  }
}
