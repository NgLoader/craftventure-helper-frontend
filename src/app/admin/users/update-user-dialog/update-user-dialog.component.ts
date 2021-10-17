import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api/api.service';
import { Response } from 'src/app/service/content/content.service';

@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.scss']
})
export class UpdateUserDialogComponent {

  @Input() id: string = undefined;
  @Input() username: string = "";
  @Input() email: string = "";
  @Input() role: string = "USER";

  @Output() onUpdate: EventEmitter<void> = new EventEmitter();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  usernameFormControl = new FormControl('', [
    Validators.minLength(4),
    Validators.maxLength(32),
    Validators.pattern(new RegExp("^([A-z0-9])*[^\\s]\\1*$")),
  ]);

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  updateUser() {
    if (this.id == undefined) {
      this.snackbar.open("No id found", undefined, { duration: 4000 });
    } else if (!this.emailFormControl.valid) {
      this.snackbar.open("Please correct your email", undefined, { duration: 4000 });
    } else if (!this.usernameFormControl.valid) {
      this.snackbar.open("Please correct your username", undefined, { duration: 4000 });
    } else {
      this.httpClient.post<Response>(ApiService.postAccountUpdate, {
        id: this.id,
        name: this.username,
        email: this.email,
        role: this.role
      }).subscribe(result => {
        if (result && result.success) {
          this.onUpdate.emit();
          this.snackbar.open("Successful updated", undefined, { duration: 4000 });
        } else {
          console.log(result.errors);
          this.onUpdate.error(result.errors);
          this.snackbar.open(result.errors.length > 0 ? result.errors[0].msg : "Unknown error", undefined, { duration: 4000 });
        }
      });
    }
  }
}