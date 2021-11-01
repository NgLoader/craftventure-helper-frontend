import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  public loaded: boolean = false;

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('source') source: ElementRef<HTMLSourceElement>;

  constructor() { }

  ngAfterViewInit() {
    this.video.nativeElement.onplay = () => {
      this.loaded = true;

      const style = this.video.nativeElement.style;
      style.visibility = 'visible';
      style.animation = 'fadeIn 5s';
    }
    this.video.nativeElement.volume = 0;
    this.video.nativeElement.muted = true;
    this.source.nativeElement.src = '/assets/image/background.webm';
  }

  getImageStyle() {
    return this.loaded ? { } : {
      display: 'none'
    }
  }
}
