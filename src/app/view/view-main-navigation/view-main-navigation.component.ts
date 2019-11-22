import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RacketTypeEnum } from 'src/app/enum/enum-racket-type';

@Component({
  selector: 'app-view-main-navigation',
  templateUrl: './view-main-navigation.component.html',
  styleUrls: ['./view-main-navigation.component.css']
})
export class ViewMainNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  

  ngOnInit() {
    console.log(RacketTypeEnum.TENNIS)
  }

  public navigateToPage(path: string) {
    this.router.navigate([path]);
  }
}
