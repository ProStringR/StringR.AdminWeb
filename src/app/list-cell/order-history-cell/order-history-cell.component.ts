import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-order-history-cell',
  templateUrl: './order-history-cell.component.html',
  styleUrls: ['./order-history-cell.component.scss']
})
export class OrderHistoryCellComponent implements OnInit {

  @Input() history: any;

  date: string;

  constructor(public datePipe: DatePipe) { }

  ngOnInit() {
    //this.date = this.datePipe.transform(new Date(this.history.date), 'dd/MM/yyyy');
  }

}
