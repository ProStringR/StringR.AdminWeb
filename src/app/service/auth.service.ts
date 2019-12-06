import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataControlService } from '../control/data-control.service';
import { API } from './../config/api';
import { User } from './../model/model-user';
import { Router } from '@angular/router';
import {ModelAuthResponse} from '../model/model-auth-response';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthService {

  jwtHelper = new JwtHelperService();

  constructor(private fetch: DataControlService, private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public async login(userName: string, password: string) {
    await this.fetch.postObject<ModelAuthResponse>(API.post_auth, new User(userName, password)).subscribe((response) => {

      localStorage.setItem('token', response.token);
      this.router.navigate(['/mainPage']);
    });
  }
  
}
