import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api/api.service';
import { Response } from 'src/app/service/content/content.service';

export function equalsPasswordValidator(value: CreateUserDialogComponent): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const equals = value.passwordValue !== control.value;
    return equals ? { equals: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {

  @Output() username: string = "";
  @Output() email: string = "";
  @Output() role: string = "USER";
  @Output() passwordValue: string = "";
  @Output() confirmPasswordValue: string = "";

  @Output() onCreate: EventEmitter<void> = new EventEmitter();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(32),
    Validators.pattern(new RegExp("^([A-z0-9])*[^\\s]\\1*$")),
  ]);

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

  createUser() {
    if (!this.emailFormControl.valid) {
      this.snackbar.open("Please correct your email", undefined, { duration: 4000 });
    } else if (!this.usernameFormControl.valid) {
      this.snackbar.open("Please correct your username", undefined, { duration: 4000 });
    } else if (!this.passwordFormControl.valid) {
      this.snackbar.open("Please correct your password", undefined, { duration: 4000 });
    } else if (!this.passwordAgainFormControl.valid) {
      this.snackbar.open("Please correct your password", undefined, { duration: 4000 });
    } else {
      this.httpClient.post<Response>(ApiService.postAccountCreate, {
        name: this.username,
        email: this.email,
        role: this.role,
        password: this.passwordValue,
        confirmPassword: this.confirmPasswordValue,
      }).subscribe(result => {
        if (result && result.success) {
          this.onCreate.emit();
          this.snackbar.open("Successful added", undefined, { duration: 4000 });
        } else {
          console.log(result.errors);
          this.onCreate.error(result.errors);
          this.snackbar.open(result.errors.length > 0 ? result.errors[0].msg : "Unknown error", undefined, { duration: 4000 });
        }
      });
    }
  }
}