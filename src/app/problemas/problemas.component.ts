import { Component, OnInit } from '@angular/core';
import { Description } from '../models/Description'
import { Problem } from '../models/Problem'

import { ProblemService } from '../services/problem.service';




@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.scss']
})
export class ProblemasComponent implements OnInit {

  public lista :Problem[];
  constructor(private problemService: ProblemService) { }

  ngOnInit() {
    this.lista = [];
    this.problemService.getProblemList()
    .subscribe(response => {
      this.lista = response;
      console.log(response);
    });
  }

}
