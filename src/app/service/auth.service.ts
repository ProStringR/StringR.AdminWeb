import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataControlService } from '../control/data-control.service';
import { API } from './../config/api';
import { User } from './../model/model-user';
import { HttpHeaders } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthService {

  jwtHelper = new JwtHelperService();

  constructor(private fetch: DataControlService) { }

  public isAuthenticated(): boolean {
    console.log("NIKS!!")
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public async login(userName: string, password: string) {
    await this.fetch.postObject(API.post_auth, new User(userName, password)).subscribe((token) => {
      console.log(token)
      localStorage.setItem('token', token['token'])
    });
  }

}
