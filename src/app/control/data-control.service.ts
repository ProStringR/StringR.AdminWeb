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

  getList<T>(url: string): Observable<T[]> {
    return this.http.get<T>(url).pipe(
      map(response => {
        let res: T[] = []
        for (let item of Object.keys(response)) {
          res.push(response[item])
        }
        return res;
      }),
      catchError(error => throwError(error)),
    );
  }

}
