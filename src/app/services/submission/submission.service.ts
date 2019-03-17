import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/url';
import { Submission } from 'src/app/shared/submission.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  readonly SUBMISSION_END_POINT = API_URL + 'submissions/';

  constructor(private http: HttpClient) { }

  postSubmission(submission: Submission): Observable<Submission> {
    const formData = new FormData();
    formData.append('problem', submission.problem.toString());
    formData.append('source_code', submission.source_code);
    formData.append('language', submission.language);
    return this.http.post<Submission>(this.SUBMISSION_END_POINT, formData);
  }

}
