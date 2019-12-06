import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataControlService } from '../control/data-control.service';
import { API, CustomRoutes } from './../config/config';
import { User } from './../model/model-user';
import { Router } from '@angular/router';
import { ModelAuthResponse, AuthUser } from '../model/model-auth-response';

@Injectable(
  { providedIn: 'root', }
)

export class AuthService {

  private token: string = 'token';
  private id: string = 'shopId';
  private resMsg: string = 'resMsg';

  private jwtHelper = new JwtHelperService();

  constructor(private fetch: DataControlService, private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.token);
    return !this.jwtHelper.isTokenExpired(token);
  }

  public async login(userName: string, password: string) {
    await this.fetch.postObject<ModelAuthResponse>(API.post_auth, new User(userName, password)).subscribe((res) => {
      this.setUser(res);
      this.router.navigate([CustomRoutes.mainPage]);
    });
  }

  public async logout() {
    this.removeUser();
    this.router.navigate([CustomRoutes.login]);
  }

  public getUser(): AuthUser {
    return new AuthUser(
      localStorage.getItem(this.token),
      parseInt(localStorage.getItem(this.id)),
      localStorage.getItem(this.resMsg)
    );
  }

  private setUser(res: ModelAuthResponse): void {
    localStorage.setItem(this.token, res.token);
    localStorage.setItem(this.id, res.id.toString());
    localStorage.setItem(this.resMsg, res.responseMessage);
  }

  private removeUser(): void {
    localStorage.removeItem(this.token);
    localStorage.removeItem(this.id);
    localStorage.removeItem(this.resMsg);
  }

}
