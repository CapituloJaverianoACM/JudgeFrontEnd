import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  probDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ Aenean commodo ligula
  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis,
  ultricies nec, pellentesque eu, pretium quis, sem. $$\\Delta x=\\int_{t_0}^{t_1} v(t)dt$$Nulla consequat massa quis enim.Donec
  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.`;
  constrains = '$1 < n < 10^{9}$';
  constructor() { }

  ngOnInit() {
  }

}
