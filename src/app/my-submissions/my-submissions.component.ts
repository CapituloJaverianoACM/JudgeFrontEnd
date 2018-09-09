import { Component, OnInit } from '@angular/core';
import { Submission } from '../models/Submission';


import { SubmissionService } from '../services/submission.service';


@Component({
  selector: 'app-my-submissions',
  templateUrl: './my-submissions.component.html',
  styleUrls: ['./my-submissions.component.scss']
})
export class MySubmissionsComponent implements OnInit {
  public lista_submissions :Submission[];

  constructor(private submissionService: SubmissionService) { }

  ngOnInit() {
    this.submissionService.getSubmissions()
    .subscribe(response => {
      this.lista_submissions = response;
      console.log(response);
    });
  }

}
