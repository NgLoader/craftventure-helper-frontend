import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api/api.service';
import { Response } from 'src/app/service/content/content.service';

export function equalsPasswordValidator(value: UpdateUserPasswordDialogComponent): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const equals = value.passwordValue !== control.value;
    return equals ? { equals: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-update-user-password-dialog',
  templateUrl: './update-user-password-dialog.component.html',
  styleUrls: ['./update-user-password-dialog.component.scss']
})
export class UpdateUserPasswordDialogComponent {

  @Input() id: string = undefined;
  @Input() passwordValue: string = "";
  @Input() confirmPasswordValue: string = "";

  @Output() onUpdate: EventEmitter<void> = new EventEmitter();

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(32),
    Validators.pattern(new RegExp("^([A-z0-9!@#$%^&*().,<>{}[\\]<>?_=+\\-|;:\\'\"\\/])*[^\\s]\\1*$")),
  ]);

  passwordAgainFormControl = new FormControl('', [
    this.passwordFormControl.validator,
    equalsPasswordValidator(this),
  ]);

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  updateUser() {
    if (this.id == undefined) {
      this.snackbar.open("No id found", undefined, { duration: 4000 });
    } else if (!this.passwordFormControl.valid) {
      this.snackbar.open("Please correct your password", undefined, { duration: 4000 });
    } else if (!this.passwordAgainFormControl.valid) {
      this.snackbar.open("Please correct your password", undefined, { duration: 4000 });
    } else {
      this.httpClient.post<Response>(ApiService.postAccountPassword, {
        id: this.id,
        password: this.passwordValue,
        confirmPassword: this.confirmPasswordValue,
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