import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { User } from 'src/app/shared/user.model';
import { FacadeService } from 'src/app/services/facade/facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userCredentials: User = {
    first_name: 'Juan',
    last_name: 'Peñaloza',
    username: 'juanpa097',
    email: 'jaun@gmail.com',
    password: '123456789',
    phone_number: '3103179283'
  };


  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private facadeService: FacadeService
    ) { }

  ngOnInit() {
  }

  onCloseClicked(): void {
    this.dialogRef.close();
  }

  // TODO - Fixme
  loginUser(): void {
    this.facadeService.authenticationService.loginUser(this.userCredentials).subscribe(
      res => this.facadeService.authenticationService.saveToken(res['token'])
    );
  }

}
