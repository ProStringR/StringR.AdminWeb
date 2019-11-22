import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-main-navigation',
  templateUrl: './view-main-navigation.component.html',
  styleUrls: ['./view-main-navigation.component.css']
})
export class ViewMainNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateToPage(path: string) {
    this.router.navigate([path]);
  }
}
