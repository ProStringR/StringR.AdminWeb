import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataControlService {

  constructor(protected http: HttpClient) {
  }

  public getItem<T>(url: string): Observable<T> {
    return this.http.get<T>(url + '.json').pipe(
      map(response => {
        return response;
      }),
      catchError(err => throwError(err))
    );
  }

  public getList<T>(url: string): Observable<T[]> {
    return this.http.get<T>(url + '.json').pipe(
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

  public firstGet(url: string) {
    return this.http.get(url + '.json')
  }

}
