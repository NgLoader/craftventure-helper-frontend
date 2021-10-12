import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('email') public email: ElementRef<HTMLInputElement>;
  @ViewChild('password') public password: ElementRef<HTMLInputElement>;

  loading = false;
  message: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.authService.login(this.email.nativeElement.value, this.password.nativeElement.value, (result) => {
      this.loading = false;
      if (result.loggedin) {
        this.router.navigate(["/"]);
        return;
      }

      this.message = result.errors.length > 0 ? result.errors[0].msg : 'Unknown error';
    });
  }

  logout() {
    this.authService.logout();
    this.message = "Logged out!";
  }
}