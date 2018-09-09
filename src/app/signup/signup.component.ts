import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public user: User;
  public password: string;
  public rePassword: string;


  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
  }


  onSubmit():void {
    if(this.password === this.rePassword){
      console.log("iguales");
      this.user.password = this.password;
    }
    else{
      console.log("paila"); // TODO - Manage error
    }
    let ans = this.userService.registerUser(this.user)
      .subscribe(response => {
        console.log(response);
      });
    console.log(ans);
    
  }

}
