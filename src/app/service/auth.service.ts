import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API, CustomRoutes } from './../config/config';
import { User } from './../model/model-user';
import { Router } from '@angular/router';
import { ModelAuthResponse, AuthUser } from '../model/model-auth-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable(
  { providedIn: 'root', }
)

export class AuthService {

  private token: string = 'token';
  private id: string = 'shopId';
  private resMsg: string = 'resMsg';

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.token);
    return !this.jwtHelper.isTokenExpired(token);
  }

  public async login(userName: string, password: string) {
    await this.postObject<ModelAuthResponse>(API.post_auth, new User(userName, password)).subscribe((res) => {
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

  private postObject<T>(url: string, object: any) {
    return this.http.post<T>(url, object, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      map(data => data),
      catchError(err => throwError(err))
    );
  }

}
