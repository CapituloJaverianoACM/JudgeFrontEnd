import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/user.model';
import { API_URL } from 'src/app/shared/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  readonly SIGNUP_END_POINT = API_URL + 'users/signup/'
  readonly LOGIN_END_POINT = API_URL + 'login/'

  private _token: string;
  public get token(): string {
    if(!this._token) {
      this._token = localStorage.getItem('token'); 
    }
    return this._token;
  }

  constructor(private http: HttpClient) { }

  registerUser(userToRegister: User): Observable<string> {
    return this.http.post<string>(this.SIGNUP_END_POINT, userToRegister);
  }

  loginUser(userCredentials: User): Observable<any> {
    return this.http.post(this.LOGIN_END_POINT, userCredentials);
  }

  isServiceAlive(): void {
    console.log("Hello, Authentication is alive");
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

}
