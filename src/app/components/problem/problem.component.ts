import { Component, OnInit, ViewChild } from '@angular/core';
import { Problem } from 'src/app/shared/problem.model';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Submission } from 'src/app/shared/submission.model';
import { Language } from 'src/app/shared/language.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  problem: Problem;
  @ViewChild('fileInput') fileInput;

  constructor(
    private facadeService: FacadeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.facadeService.practiceService.getSingleProblem(params.id).subscribe(
        res => this.problem = res
      );
    });
  }

  /**
   * Gets a file from the computer and sends it to
   * the service to send it to the backend.
   */
  submitFile(): void {
    const sourceCodeFile = this.fileInput.nativeElement.files[0];
    const sumbission: Submission = {
      problem: this.problem.id,
      source_code: sourceCodeFile,
      language: Language.Python2
    };
    this.facadeService.submissionService.postSubmission(sumbission).subscribe(
      ans => {
        alert("Code submited success")
      }
    );
  }

  /**
   * Opens the file explorer to upload files.
   */
  addFiles(): void {
    this.fileInput.nativeElement.click();
  }

}
