import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
    this.user.username = '';
    this.user.password = '';
  }

  onSubmit():void {
    let ans = this.userService.validateLogin();
    console.log(ans);
    
  }

}
