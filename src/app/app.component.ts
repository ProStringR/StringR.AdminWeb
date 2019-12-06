import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AdminWeb';

  constructor(private router: Router) {
    this.router.navigate([Routes.mainPage]);
  }
}
