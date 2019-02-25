import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.scss']
})
export class StandComponent implements OnInit {

  @Input() user:User

  constructor() { }

  ngOnInit() {
    console.log('In Stand: ', this.user);
    
  }

}
