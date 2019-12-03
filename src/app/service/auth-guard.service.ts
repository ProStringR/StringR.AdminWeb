import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthGuardService implements CanActivateChild {

  constructor(private auth: AuthService, private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // if (!this.auth.isAuthenticated()) {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true;
  }



}
