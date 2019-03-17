import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ScoreboardService } from '../scoreboard/scoreboard.service';
import { PracticeService } from '../practice/practice.service';
import { SubmissionService } from '../submission/submission.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private _authenticationService: AuthenticationService;
  public get authenticationService(): AuthenticationService {
    if (!this._authenticationService) {
      this._authenticationService = this.injector.get(AuthenticationService);
    }
    return this._authenticationService;
  }

  private _scoreboardService: ScoreboardService;
  public get scoreboardService(): ScoreboardService {
    if (!this._scoreboardService) {
      this._scoreboardService = this.injector.get(ScoreboardService);
    }
    return this._scoreboardService;
  }

  private _practiceService: PracticeService;
  public get practiceService(): PracticeService {
    if (!this._practiceService) {
      this._practiceService = this.injector.get(PracticeService);
    }
    return this._practiceService;
  }

  private _submissionService: SubmissionService;
  public get submissionService(): SubmissionService {
    if (!this._submissionService) {
      this._submissionService = this.injector.get(SubmissionService);
    }
    return this._submissionService;
  }


  constructor(private injector: Injector) { }
}
