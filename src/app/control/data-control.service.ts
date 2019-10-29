import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataControlService {

  constructor(private http: HttpClient) {
  }

  public getJSON(url: string) {
    return this.http.get(url)
  }
}
