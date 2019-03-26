import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { FacadeService } from '../../services/facade/facade.service';
import { User } from 'src/app/shared/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private facadeService: FacadeService,
    private formBuilder: FormBuilder,
    private route: Router,
    ) { }

  ngOnInit() {
    this.buildRegisterForm();
  }

  /**
   * Closes the dialog window.
   */
  onCloseClicked(): void {
    this.dialogRef.close();
  }

  /**
   * Sends the information from the form
   * to the backend.
   */
  registerUser(): void {
    const userToRegister = this.registerForm.value as User;
    userToRegister.course = 1;
    this.facadeService.authenticationService.registerUser(userToRegister).subscribe(res => {
      this.route.navigate(['practice']);
      this.onCloseClicked();
    });
  }

  private buildRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      phone: ['', [Validators.required, Validators.min(10)]]
    });
  }

}
