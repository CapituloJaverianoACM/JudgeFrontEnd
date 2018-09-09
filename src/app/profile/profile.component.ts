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
    
    this.current_user.first_name = '';
    this.current_user.last_name = '';
    this.current_user.profile.career = '';
    this.current_user.username = '';
    this.current_user.email = '';
    this.new_user = this.current_user;
  }


  onSubmit():void {
    //console.log("algo");
    if(this.password === this.rePassword){
      console.log("iguales");
      this.new_user.password = this.password;
    }
    else{
      console.log("paila"); // TODO - Manage error
    }
    let ans = this.userService.editUser(this.new_user)
      .subscribe(response => {
        console.log(response);
      });
    console.log(ans); 
  }

}
