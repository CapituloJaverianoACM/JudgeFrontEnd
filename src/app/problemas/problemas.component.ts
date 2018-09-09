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
  constructor(private problemService: ProblemService) { 
    this.lista = [

      /*{
  
          
          "id": 1,
          "description": {
  
              
  
              "statement": "Fibonacci bla bla bla",
  
              "input_format": "standard inpput",
  
              "output_format": "standard output",
  
              "explanation": "haga la secuencia fibonacci"
  
          },
  
          "name": "promedio",
  
          "max_score": 10,
  
          "difficulty": 1,
  
          "time_limit": 1,
  
          "theme": "logica",
  
          "template": "",
  
          "link_source": "",
  
          "is_original": false
  
      },
      {
  
          
        "id": 2,
        "description": {

            

            "statement": "josefo fue bla bla bla",

            "input_format": "standard inpput",

            "output_format": "standard output",

            "explanation": "quien sobrevive?"

        },

        "name": "josefo",

        "max_score": 8,

        "difficulty": 3,

        "time_limit": 1,

        "theme": "numeros",

        "template": "",

        "link_source": "",

        "is_original": false

    }*/

    ]
  }

  ngOnInit() {
    this.problemService.getProblemList()
    .subscribe(response => {
      this.lista = response;
      console.log(response);
    });
  }
  onSelect(){
    

  }

}
