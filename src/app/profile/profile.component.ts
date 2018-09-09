import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public current_user :User;
  public new_user :User;
  public password: string;
  public rePassword: string;


  constructor(private userService:UserService) { 
    this.new_user = new User();
    this.current_user = new User();
  }

  ngOnInit() {
    
    this.current_user.first_name = "Johan";
    this.current_user.last_name = "Murillo";
    this.current_user.profile.career = "Colegio femenino";
    this.current_user.username = "ElJohanXXX69";
    this.current_user.email = "gmail@johan.com";

    this.new_user = this.current_user;
  }

}
