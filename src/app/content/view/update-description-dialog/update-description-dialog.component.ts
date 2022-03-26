import { Component, ViewChild } from '@angular/core';
import { ContentChange, QuillEditorBase, QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-update-description-dialog',
  templateUrl: './update-description-dialog.component.html',
  styleUrls: ['./update-description-dialog.component.scss']
})
export class UpdateDescriptionDialogComponent {

  @ViewChild('quill', { static: true }) editor: QuillEditorBase;

  public html: string;

  constructor() { }

  setHtml(html: string) {
    this.editor.content = html;
  }

  onContentChanged(event: ContentChange) {
    this.html = event.html;
  }
}
