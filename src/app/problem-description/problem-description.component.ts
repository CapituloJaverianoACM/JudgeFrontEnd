import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Problem } from '../models/Problem';
import { Submission } from '../models/Submission';

import { ProblemService } from '../services/problem.service';
import { SubmissionService } from '../services/submission.service';

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.scss']
})
export class ProblemDescriptionComponent implements OnInit {

  public problem:Problem;
  private source_code: File = null;

  constructor(
    private problemService: ProblemService,
    private submissionService: SubmissionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProblem();
  }
  
  private getProblem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.problemService.getProblem(id).subscribe(
      problem => this.problem = problem
    );
  }

  public createSubmission():void {
    if(!this.source_code) {
      alert("Selecciona un archivo");
      return;
    }
    let submission: Submission = new Submission();
    submission.problem = this.problem.id;
    submission.source_code = this.source_code;
    this.submissionService.makeSubmission(submission).subscribe();
  }

  public onFileChange(files: FileList) {
    this.source_code = files[0];
  }

}
