import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-purchase-history-cell',
  templateUrl: './purchase-history-cell.component.html',
  styleUrls: ['./purchase-history-cell.component.scss']
})
export class PurchaseHistoryCellComponent implements OnInit {

  //@Input() history: PurchaseHistory;
  purchaseDate: string;

  constructor(public datePipe: DatePipe) { }

  ngOnInit() {
    // const date = new Date(this.history.date);
    // this.purchaseDate = this.datePipe.transform(date, 'dd/MM/yyyy');
  }

}
