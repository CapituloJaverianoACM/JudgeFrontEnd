import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Problem } from '../models/Problem';

import { ProblemService } from '../services/problem.service';

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.scss']
})
export class ProblemDescriptionComponent implements OnInit {

  public problem:Problem;
  public fileToUpload: File = null;

  constructor(
    private problemService: ProblemService,
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

  public onFilesAdded() {
    console.log("Hello");
  }
}
