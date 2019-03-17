import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Problem } from 'src/app/shared/problem.model';
import { Difficulty } from 'src/app/shared/difficulty.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() problem: Problem;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private getDifficultyClass(difficulty: Difficulty): string {
    switch (difficulty) {
      case Difficulty.Easy:
        return 'problem-card__subtittle--easy';
        break;
      case Difficulty.Medium:
        return 'problem-card__subtittle--medium';
        break;
      case Difficulty.Hard:
        return 'problem-card__subtittle--hard';
        break;
    }
  }

  goToProblem(): void {
    this.router.navigate(['problem', this.problem.id]);
  }

  isProblemSolved(): boolean {
    return (this.problem.score === 1);
  }

}
