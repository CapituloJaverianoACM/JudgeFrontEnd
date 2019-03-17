import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/shared/problem.model';
import { Difficulty } from 'src/app/shared/difficulty.enum';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  problemList: Problem[];

  constructor(
    private facadeService: FacadeService,
    private router: Router
    ) { }

  // dummyProblems: Problem[] = [
  //   {name: 'Solve me first', difficulty: Difficulty.Easy, category: 'Arrays', success_rate: 0.93, isSolved: false},
  //   { name: 'Compare the triplets', difficulty: Difficulty.Medium, category: 'Conditionals', success_rate: 0.71, isSolved: true},
  //   { name: 'A very big sum', difficulty: Difficulty.Hard, category: 'Data structures', success_rate: 0.43, isSolved: false},
  //   { name: '3n + 1', difficulty: Difficulty.Easy, category: 'Classic', isSolved: false},
  // ];

  ngOnInit() {
    this.facadeService.practiceService.getProblems().subscribe(
      res => { this.problemList = res; }
    );
  }

}
