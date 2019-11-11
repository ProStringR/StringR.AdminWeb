import {Component, Input, OnInit} from '@angular/core';
import {OrderHistory} from '../../model/model-order';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-order-history-cell',
  templateUrl: './order-history-cell.component.html',
  styleUrls: ['./order-history-cell.component.scss']
})
export class OrderHistoryCellComponent implements OnInit {

  @Input() history: OrderHistory;

  date: string;

  constructor(public datePipe: DatePipe) { }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(this.history.date), 'dd/MM/yyyy');
  }

}
