import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { FacadeService } from '../services/facade/facade.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private facadeService: FacadeService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot = null, state: RouterStateSnapshot = null): boolean {
    if (this.facadeService.authenticationService.isLoggedIn) { return true; }
    // this.router.navigate(['/']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
