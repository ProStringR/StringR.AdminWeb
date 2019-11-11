import {Component, Input, OnInit} from '@angular/core';
import {OrderModel} from '../../model/model-order';

@Component({
  selector: 'app-view-order-detail',
  templateUrl: './view-order-detail.component.html',
  styleUrls: ['./view-order-detail.component.scss']
})
export class ViewOrderDetailComponent implements OnInit {

  @Input() element: OrderModel;

  constructor() { }

  ngOnInit() {
  }

}
