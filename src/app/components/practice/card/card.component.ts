import { Component, OnInit, Input } from '@angular/core';
import { Problem } from 'src/app/shared/problem';
import { Difficulty } from 'src/app/shared/difficulty.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() problem: Problem;

  constructor() { }

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

}