import { Injectable } from "@angular/core";
import { observable, action, computed } from 'mobx-angular';
import { DataControlService } from '../control/data-control.service';
import { OrderModel } from '../model/model-order';
import { API } from '../config/api';

@Injectable(
    { providedIn: 'root' }
)
export class OrdersOverviewStore {

    constructor(private fetch: DataControlService) {
        this.updateState();
    }

    @observable
    private received: OrderModel[] = [];

    @observable
    private done: OrderModel[] = [];

    @observable
    private delivered: OrderModel[] = [];

    @observable
    private completed: OrderModel[] = [];

    @observable
    filterOrders: string = '';

    @action
    async updateState() {
        let received: OrderModel[] = [];
        let done: OrderModel[] = [];
        let delivered: OrderModel[] = [];
        let completed: OrderModel[] = [];

        await this.fetch.getList<OrderModel>(API.get_order_by_shopId(1)).subscribe((res) => {
            res.forEach((order) => {
                switch (order.orderStatus) {
                    case 0: received.push(order); break;
                    case 1: done.push(order); break;
                    case 2: delivered.push(order); break;
                    case 3: completed.push(order); break;
                    default:
                        break;
                }
            })
            this.received = received;
            this.done = done;
            this.delivered = delivered;
            this.completed = completed;
        })
    }

    @computed
    get filteredReceived(): OrderModel[] {
        return this.received.filter((type) => JSON.stringify(type).toLowerCase().includes(this.filterOrders.toLowerCase()));
    }

    @computed
    get filteredDone(): OrderModel[] {
        return this.done.filter((type) => JSON.stringify(type).toLowerCase().includes(this.filterOrders.toLowerCase()));
    }

    @computed
    get filteredDelivered(): OrderModel[] {
        return this.delivered.filter((type) => JSON.stringify(type).toLowerCase().includes(this.filterOrders.toLowerCase()));
    }

    @computed
    get filteredCompleted(): OrderModel[] {
        return this.completed.filter((type) => JSON.stringify(type).toLowerCase().includes(this.filterOrders.toLowerCase()));
    }


}