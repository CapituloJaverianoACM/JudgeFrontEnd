import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/shared/problem';
import { Difficulty } from 'src/app/shared/difficulty.enum';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  dummyProblems: Problem[] = [
    {name: 'Solve me first', difficulty: Difficulty.Easy, category: 'Arrays', successRate: 0.93, isSolved: false},
    { name: 'Compare the triplets', difficulty: Difficulty.Medium, category: 'Conditionals', successRate: 0.71, isSolved: true},
    { name: 'A very big sum', difficulty: Difficulty.Hard, category: 'Data structures', successRate: 0.43, isSolved: false},
    { name: '3n + 1', difficulty: Difficulty.Easy, category: 'Classic', isSolved: false},
  ];

  ngOnInit() {
  }

}
