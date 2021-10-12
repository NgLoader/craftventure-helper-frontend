import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSelectChange } from '@angular/material/select';
import { AngularEditorConfig } from '@kolkov/angular-editor';

export enum IFieldModel {
  INPUT = "input",
  CHIP = "chip",
  CHECKBOX = "checkbox",
  BUTTON = "button",
  SELECT = "select",
  TEXTAREA = "textarea",
  EDITOR = "editor"
}

export interface IField {
  id: string;
  name?: string;

  model?: IFieldModel;

  placeholder?: string;
  inputType?: 'text' | 'password' | 'disabled';
  value?: string | string[] | boolean;
  style?: string;

  leftClick?: (event: MouseEvent, field: IField) => void;
  onChange?: (field: IField, event: string) => void;

  temp?: { [value: string]: any };
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {

  title: string = '';
  fields: IField[] = [];

  error: string;

  submitName: string = 'Submit';
  submit: () => any;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  froalaOptions: Object = {
    charCounterCount: true
  }

  constructor() { }

  private callChange(field: IField, event: string) {
    field.onChange && field.onChange(field, event);
  }

  addChip(field: IField, event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!field.value) {
        field.value = [value.trim()];
      } else if (field.value instanceof Array) {
        field.value.push(value.trim());
      } else {
        field.value = [field.value as string, value.trim()];
      }
    }

    if (input) {
      input.value = '';
    }
    this.callChange(field, 'addChip');
  }

  removeChip(field: IField, value: string): void {
    if (!field.value) {
      return;
    } else if (!(field.value instanceof Array)) {
      field.value = [];
      return;
    }

    const index = field.value.indexOf(value);
    if (index >= 0) {
      field.value.splice(index, 1);
    }
    this.callChange(field, 'removeChip');
  }

  dropChip(field: IField, event: CdkDragDrop<string[]>) {
    if (field.value && field.value instanceof Array) {
      moveItemInArray(field.value, event.previousIndex, event.currentIndex);
    }
    this.callChange(field, 'dropChip');
  }

  toggleValue(field: IField, event: MatCheckboxChange) {
    field.value = event.checked;
    this.callChange(field, 'toggleValue');
  }

  selectValue(field: IField, event: MatSelectChange) {
    if (!field.temp) {
      field.temp = {};
    }
    field.temp['selected'] = event.value;
    this.callChange(field, 'selectValue');
  }

  getField(id: string): IField {
    const found = this.fields.filter(field => field.id == id);
    return found.length > 0 ? found[0] : undefined;
  }

  getValue(id: string): string {
    const element = document.getElementById(`dialog-${id}`);
    return element ? (document.getElementById(`dialog-${id}`) as HTMLInputElement).value : undefined;
  }

  getValueArray(id: string): string[] {
    const field = this.getField(id);
    if (field && field.model && field.model == IFieldModel.CHIP) {
      return field.value instanceof Array ? field.value : [field.value as string];
    }
    return undefined;
  }

  getValueBoolean(id: string): boolean {
    const field = this.getField(id);
    if (field && field.model && field.model == IFieldModel.CHECKBOX) {
      return field.value == true ? field.value : false;
    }
    return false;
  }

  getValueSelected(id: string): string {
    const field = this.getField(id);
    if (field && field.model && field.model == IFieldModel.SELECT) {
      return field.temp ? field.temp['selected'] : undefined;
    }
    return undefined;
  }
}
