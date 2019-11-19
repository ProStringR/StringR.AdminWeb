import { Component, OnInit } from '@angular/core';
import {OrderModel} from '../../model/model-order';
import {DataControlService} from '../../control/data-control.service';
import {Firebase} from '../../utility/firebase';

@Component({
  selector: 'app-view-order-overview',
  templateUrl: './view-order-overview.component.html',
  styleUrls: ['./view-order-overview.component.scss']
})
export class ViewOrderOverviewComponent implements OnInit {

  columns = ['Received', 'Done', 'Delivered', 'Completed'];
  received: OrderModel[] = [];
  done: OrderModel[] = [];
  delivered: OrderModel[] = [];
  completed: OrderModel[] = [];
  orders = [this.received, this.done, this.delivered, this.completed];

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {
    this.dataControl.getItem<OrderModel>(Firebase.order + '/4A9AE1AC-A020-42F0-83BB-DF157B822CC9').subscribe( (order) => {
      this.done.push(order);
    });
  }

}
