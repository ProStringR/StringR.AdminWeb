import {Component, Input, OnInit} from '@angular/core';
import {PurchaseHistory} from '../../model/model-racket-string';

@Component({
  selector: 'app-purchase-history-cell',
  templateUrl: './purchase-history-cell.component.html',
  styleUrls: ['./purchase-history-cell.component.scss']
})
export class PurchaseHistoryCellComponent implements OnInit {

  @Input() history: PurchaseHistory;

  constructor() { }

  ngOnInit() {
  }

}
