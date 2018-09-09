import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
//import { resolve } from 'path';
import { baseURL } from '../models/baseurl';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl = baseURL + '/user/';
  private loginUrl = baseURL + '/login/';

  constructor(private http: HttpClient) { }

  validateLogin (user: User):Observable<any> {
    return this.http.post(this.loginUrl, user, httpOptions)
      .pipe(
        catchError(this.handleError('validateLogin', {error: "Error at validating user"})) // TODO - Send the server's error.
      );
  }

  registerUser(newUser: User):Observable<User>{
    return this.http.post<User>(this.usersUrl, newUser, httpOptions);
  } 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
