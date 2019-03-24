import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private facadeService: FacadeService,
    private authGuard: AuthGuard
  ) { }

  ngOnInit() {
  }

  logout(): void {
    this.facadeService.authenticationService.logout();
  }

}
