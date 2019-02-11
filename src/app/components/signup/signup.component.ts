import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
  }

  /**
   * Closes the dialog window.
   */
  onCloseClicked(): void {
    this.dialogRef.close();
  }

}
