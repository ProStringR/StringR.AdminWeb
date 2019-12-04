import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-main-navigation',
  templateUrl: './view-main-navigation.component.html',
  styleUrls: ['./view-main-navigation.component.css']
})

export class ViewMainNavigationComponent {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
