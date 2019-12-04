import { Component } from '@angular/core';

@Component({
  selector: 'app-view-economy-overview',
  templateUrl: './view-economy-overview.component.html',
  styleUrls: ['./view-economy-overview.component.scss']
})

export class ViewEconomyOverviewComponent {

  sortTime: number = 0;

  charts: any[] = [
    {
      title: 'Revenue'
    },
    {
      title: 'Expenses'
    },
    {
      title: 'Profit'
    }
  ]

  constructor() { }

  changeSortTime(n: number): void {
    this.sortTime = n;
  }

}
