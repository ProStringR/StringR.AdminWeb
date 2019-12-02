import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OrdersOverviewStore } from 'src/app/store/orders-overview.store';

@Component({
  selector: 'app-view-order-overview',
  templateUrl: './view-order-overview.component.html',
  styleUrls: ['./view-order-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewOrderOverviewComponent {

  searchText
  columns = ['Received', 'Done', 'Delivered', 'Completed'];

  constructor(private store: OrdersOverviewStore) {}

  search(search: string) {console.log(search)}

}