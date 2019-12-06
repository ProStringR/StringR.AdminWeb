import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class DataControlService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  public postObject<T>(url: string, object: any, headers?: HttpHeaders) {
    return this.http.post<T>(url, object, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.auth.getUser().token
      })
    }).pipe(
      map(data => data),
      catchError(error => throwError(this.errorHandler(error)))
    );
  }

  public getItem<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.auth.getUser().token
      })
    }).pipe(
      map(response => {
        return response;
      }),
      catchError(error => throwError(this.errorHandler(error)))
    );
  }

  public getList<T>(url: string): Observable<T[]> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.auth.getUser().token
      })
    }).pipe(
      map(response => {
        const res: T[] = []
        for (const item of Object.keys(response)) {
          res.push(response[item]);
        }
        return res;
      }),
      catchError(error => throwError(this.errorHandler(error))),
    );
  }

  private errorHandler(error: any) {
    console.log(error)
    if (error.status === 401) {
      this.auth.logout()
    }
  }

}
