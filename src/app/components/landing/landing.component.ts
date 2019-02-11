import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";

import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * Opens the dialog with the login form.
   * @return {void} 
   */
  openLoginDialogForm(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(LoginComponent, dialogConfig);
  }

  /**
   * Opens the dialog with the signup form.
   * @return {void}
   */
  openSignupDialogForm(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SignupComponent, dialogConfig);
  }


}
