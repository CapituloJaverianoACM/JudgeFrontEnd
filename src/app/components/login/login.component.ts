import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { User } from 'src/app/shared/user.model';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private facadeService: FacadeService,
    private formBuilder: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  onCloseClicked(): void {
    this.dialogRef.close();
  }

  // TODO - Fixme
  loginUser(): void {
    const userCredentials = this.loginForm.value as User;
    this.facadeService.authenticationService.loginUser(userCredentials).subscribe(
      res => {
        this.facadeService.authenticationService.saveToken(res['token']);
        this.route.navigate(['practice']);
        this.onCloseClicked();
      }
    );
  }

  /**
   * Builds FormGroup for login form.
   */
  private buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

}
