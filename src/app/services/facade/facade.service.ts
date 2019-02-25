import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ScoreboardService } from '../scoreboard/scoreboard.service';
import { PracticeService } from '../practice/practice.service';

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


  constructor(private injector: Injector) { }
}
