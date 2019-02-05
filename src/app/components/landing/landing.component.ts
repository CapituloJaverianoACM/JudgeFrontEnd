import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";

import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialogForm(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(LoginComponent, dialogConfig);
  }


}
