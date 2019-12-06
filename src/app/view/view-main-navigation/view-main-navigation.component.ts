import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-main-navigation',
  templateUrl: './view-main-navigation.component.html',
  styleUrls: ['./view-main-navigation.component.css']
})

export class ViewMainNavigationComponent {

  constructor(private auth: AuthService) { }

  logout() {this.auth.logout();}

}
