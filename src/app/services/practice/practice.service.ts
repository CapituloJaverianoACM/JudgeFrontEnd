import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/shared/url';
import { Observable } from 'rxjs';
import { Problem } from 'src/app/shared/problem.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  readonly PRACTICE_END_POINT = API_URL + 'problems/';

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService
    ) { }

  getProblems(): Observable<Problem[]> {
    // TODO - Hacer buena práctica para headers
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + this.authenticationService.token
        })
    };
    return this.http.get<Problem[]>(this.PRACTICE_END_POINT, httpOptions);
  }

  getSingleProblem(problemId: number): Observable<Problem> {
    // TODO - Hacer buena práctica para headers
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + this.authenticationService.token
        })
    };
    return this.http.get<Problem>(this.PRACTICE_END_POINT + problemId + '/', httpOptions);
  }

}
