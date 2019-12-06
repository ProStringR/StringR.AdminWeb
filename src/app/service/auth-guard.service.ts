import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import { CustomRoutes } from './../config/config';

@Injectable(
  { providedIn: 'root', }
)

export class AuthGuardService implements CanActivateChild {

  constructor(private auth: AuthService, private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.auth.isAuthenticated()) {
      return true
    }
    this.router.navigate([CustomRoutes.login]);
    return false;
  }

}
