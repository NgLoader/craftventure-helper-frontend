import { Component } from '@angular/core';

@Component({
  selector: 'app-update-description-dialog',
  templateUrl: './update-description-dialog.component.html',
  styleUrls: ['./update-description-dialog.component.scss']
})
export class UpdateDescriptionDialogComponent {

  froalaValue: string = "";

  froalaOptions: Object = {
    charCounterCount: true
  }

  constructor() { }

  getFroalaOptions() {
    return JSON.parse(JSON.stringify(this.froalaOptions))
  }
}
