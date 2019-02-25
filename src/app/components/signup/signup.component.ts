import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { FacadeService } from '../../services/facade/facade.service';
import { User } from 'src/app/shared/user.model';
import { log } from 'util';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private userRegister:User = {
    first_name: 'Juan',
    last_name: 'Peñaloza',
    username: 'juanpa097',
    email: 'jaun@gmail.com',
    password: '123456789',
    phone_number: '3103179283',
    course: 1
  };

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private facadeService: FacadeService
    ) { }

  ngOnInit() {
    this.facadeService.authenticationService.isServiceAlive();
  }

  /**
   * Closes the dialog window.
   */
  onCloseClicked(): void {
    this.dialogRef.close();
  }

  registerUser(): void {
    this.facadeService.authenticationService.registerUser(this.userRegister).subscribe(
      res => {
        console.log(res);
        
      }
    )
  }

}
