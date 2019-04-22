import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Router } from '@angular/router';
import { Submission } from 'src/app/shared/submission.model';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  submissionList: Submission[];
  displayedColumns: string[] = ['problem', 'user', 'date', 'verdict'];
  constructor(
    private facadeService: FacadeService,
    private router: Router
    ) { }

  ngOnInit() {
    this.facadeService.submissionService.getSubmissions().subscribe(
      res => {
        this.submissionList = res;
        for ( const submission of this.submissionList ) {
          submission.created = new Date(submission.created).toLocaleString();
        }
       }
    );
  }

}
