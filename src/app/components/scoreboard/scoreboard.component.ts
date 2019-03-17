import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  scoreboard: User[];

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.facadeService.scoreboardService.getScoreboard().subscribe(
      res => { this.scoreboard = res; }
    );
  }

}
