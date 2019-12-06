import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataControlService {

  constructor(protected http: HttpClient) { }

  public postObject<T>(url: string, object: any, headers?: HttpHeaders) {

    if (headers == null) {
      headers = new HttpHeaders({
        'Content-type' : 'application/json'
      });
    }

    return this.http.post<T>(url, object, {
      headers: headers
    }).pipe(
      map(data => data),
      catchError(err => throwError(err))
    );
  }

  public getItem<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      map(response => {
        return response;
      }),
      catchError(err => throwError(err))
    );
  }

  public getList<T>(url: string): Observable<T[]> {
    return this.http.get<T>(url).pipe(
      map(response => {
        const res: T[] = []
        for (const item of Object.keys(response)) {
          res.push(response[item]);
        }
        return res;
      }),
      catchError(error => throwError(error)),
    );
  }

}
