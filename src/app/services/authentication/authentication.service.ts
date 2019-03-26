import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/shared/user.model';
import { API_URL } from 'src/app/shared/url';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly SIGNUP_END_POINT = API_URL + 'users/signup/';
  readonly LOGIN_END_POINT = API_URL + 'login/';

  private _token: string;
  isLoggedIn = false;
  public get token(): string {
    if (!this._token) {
      this._token = localStorage.getItem('token');
    }
    return this._token;
  }

  constructor(private http: HttpClient) { }

  registerUser(userToRegister: User): Observable<string> {
    return this.http.post<string>(this.SIGNUP_END_POINT, userToRegister).
      pipe(
        catchError(this.handleError),
      );
  }

  loginUser(userCredentials: User): Observable<any> {
    return this.http.post(this.LOGIN_END_POINT, userCredentials).
      pipe(
        retry(3),
        catchError(this.handleError),
      );
  }

  /**
   * Saves the token in the local storage.
   * @param token Token provided by the backend
   */
  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.isLoggedIn = true;
  }

  /**
   * Clears the local storage token and sets
   * the isLoggedIn flag to false.
   */
  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      alert('An error occurred:' + error.error.message);
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      const errorDescription = `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`;

      console.error(errorDescription);
      alert(errorDescription);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }


}
