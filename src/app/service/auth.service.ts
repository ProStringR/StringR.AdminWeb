import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataControlService } from '../control/data-control.service';
import { API } from './../config/api';
import { User } from './../model/model-user';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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

    console.log(this.jwtHelper.isTokenExpired(token))

    return !this.jwtHelper.isTokenExpired(token);
  }

  public async login(userName: string, password: string) {
    await this.fetch.postObject(API.post_auth, new User(userName, password)).subscribe((token) => {
      localStorage.setItem('token', JSON.stringify(token));
      this.router.navigate(['/mainPage']);
    });
  }

}
