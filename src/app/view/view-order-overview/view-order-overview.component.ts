import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../model/model-order';
import { OrdersOverviewStore } from 'src/app/store/orders-overview.store';

@Component({
  selector: 'app-view-order-overview',
  templateUrl: './view-order-overview.component.html',
  styleUrls: ['./view-order-overview.component.scss']
})
export class ViewOrderOverviewComponent implements OnInit {

  searchText
  columns = ['Received', 'Done', 'Delivered', 'Completed'];
  received: OrderModel[] = [];
  done: OrderModel[] = [];
  delivered: OrderModel[] = [];
  completed: OrderModel[] = [];
  orders = [this.received, this.done, this.delivered, this.completed];
  

  constructor(private store: OrdersOverviewStore) { }

  ngOnInit() {

  }

  search(search: string) {
    console.log(search)
  }

}
