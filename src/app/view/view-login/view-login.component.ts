import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})
export class ViewLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // TODO - Skal fjernes når authentication service er færdigt.
    this.router.navigate(['mainPage'])
  }

  login() {
    this.router.navigate(['mainPage'])
  }


}
