import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/shared/url';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  readonly SCOREBOARD_END_POINT = API_URL + 'users/scoreboard/'

  constructor(private http: HttpClient) { }

  getScoreboard(): Observable<User[]> {
    return this.http.get<User[]>(this.SCOREBOARD_END_POINT);
  }
}
