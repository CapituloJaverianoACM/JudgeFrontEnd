import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Submission } from '../models/Submission';
import { baseURL } from '../models/baseurl';
import { Observable, of } from 'rxjs';

const httpOptions = { // TODO - Make a file with this constant
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    })
};

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  private problemUrl = baseURL + '/submission/user/';

  constructor(private http: HttpClient) { }


  public makeSubmission(submission: Submission): Observable<Submission> {

    let formData = new FormData();

    formData.append('problem', submission.problem.toString());

    formData.append("source_code", submission.source_code);

    return this.http.post<Submission>(this.problemUrl, formData, httpOptions);

  }


  public getSubmissions(): Observable<Submission[]> {

    return this.http.get<Submission[]>(this.problemUrl, httpOptions);

  }

}
