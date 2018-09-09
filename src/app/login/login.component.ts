import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { UserService } from '../services/user.service';

import { User } from '../models/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService, 
              public dialogRef: MatDialogRef<LoginComponent>
            ) { }

  ngOnInit() {
    this.user = new User();
    this.user.remember = false;
  }

  onSubmit():void {
    let ans = this.userService.validateLogin();
    this.dialogRef.close();
    console.log(ans);
    
  }

}
