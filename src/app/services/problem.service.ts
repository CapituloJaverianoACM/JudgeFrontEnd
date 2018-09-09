import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Problem } from '../models/Problem';
import { baseURL } from '../models/baseurl';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json', 
      'Authorization': 'Token ' + localStorage.getItem('token') 
    })
};

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  private problemUrl = baseURL + '/user/';

  constructor(private http: HttpClient) { }

  getProblem(id: number):Observable<Problem> {
    return this.http.get<Problem>(this.problemUrl + id);
  }
}
