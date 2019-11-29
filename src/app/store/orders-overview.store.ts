import { Injectable } from "@angular/core";
import { observable, action, computed } from 'mobx-angular';
import { DataControlService } from '../control/data-control.service';
import { API } from '../config/api'
import { OrderModel } from '../model/model-order';

@Injectable(
    { providedIn: 'root' }
)
export class OrdersOverviewStore {

    constructor(private fetch: DataControlService) {
        this.updateState();
    }

    @observable
    allOrdersForShop: Array<OrderModel[]> = Array<OrderModel[]>(4);

    @action
    async updateState() {
        let received: OrderModel[] = [];
        let done: OrderModel[] = [];
        let delivered: OrderModel[] = [];
        let completed: OrderModel[] = [];

        this.fetch.getList<OrderModel>(API.orderShopId + '/1').subscribe((res) => {
            res.forEach((order) => {
                console.log(order)
                switch (order.orderStatus) {
                    case 0: received.push(order); break;
                    case 1: done.push(order); break;
                    case 2: delivered.push(order); break;
                    case 3: completed.push(order); break;
                    default:
                        break;
                }
            })
            this.allOrdersForShop = [received, done, delivered, completed];
        })
    }


}