import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

interface ILoginResponse {
  loggedin: boolean;
  errors: { msg: string }[]
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static loggedin: boolean = false;
  private static isEditing: boolean = false;

  private static isLoggedIn() {
    return AuthService.loggedin;
  }

  private static setLoggedIn(loggedin: boolean) {
    AuthService.loggedin = loggedin;
  }

  private static isInEditing() {
    return AuthService.isEditing;
  }

  private static setEditing(editing: boolean) {
    AuthService.isEditing = editing;
  }

  constructor(
    private httpClient: HttpClient,
    private applicationRef: ApplicationRef
  ) {
    this.httpClient.post<ILoginResponse>(ApiService.postAccountLogoutCheck, {}).subscribe(response => {
      this.setLoggedIn(response.loggedin);
    });
    const editing = localStorage.getItem('editing');
    this.setEditing(editing && editing == 'true' ? true : false);
  }

  setEditing(editing: boolean) {
    localStorage.setItem('editing', `${editing}`);
    AuthService.setEditing(editing);
    this.applicationRef.tick();
  }

  isInEditing(): boolean {
    return AuthService.isLoggedIn() && AuthService.isInEditing();
  }

  private setLoggedIn(loggedin: boolean) {
    AuthService.setLoggedIn(loggedin);
    this.applicationRef.tick();
  }

  isLoggedIn(): boolean {
    return AuthService.isLoggedIn();
  }

  login(email: string, password: string, done: (result: ILoginResponse) => any) {
    this.httpClient.post<ILoginResponse>(ApiService.postAccountLogin, { email, password }).subscribe(response => {
      this.setLoggedIn(response.loggedin);
      done(response);
    });
  }

  create(name: string, email: string, password: string, confirmPassword: string, done: (result: ILoginResponse) => {}) {
    this.httpClient.post<ILoginResponse>(ApiService.postAccountCreate, { name, email, password, confirmPassword }).subscribe(response => {
      this.setLoggedIn(response.loggedin);
      done(response);
    });
  }

  logout() {
    this.httpClient.post<ILoginResponse>(ApiService.postAccountLogout, {}).subscribe();
    this.setLoggedIn(false);
  }
}
