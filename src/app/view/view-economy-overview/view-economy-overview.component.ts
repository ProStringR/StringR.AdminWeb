import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-economy-overview',
  templateUrl: './view-economy-overview.component.html',
  styleUrls: ['./view-economy-overview.component.scss']
})
export class ViewEconomyOverviewComponent implements OnInit {

  charts = [
    1,2,3,4,5
  ]

  constructor() { }

  ngOnInit() {
  }

}
