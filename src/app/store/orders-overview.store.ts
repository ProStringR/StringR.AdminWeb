import { Injectable } from "@angular/core";
import { observable, action } from 'mobx-angular';
import { RacketStringModel } from '../model/model-racket-string';
import { DataControlService } from '../control/data-control.service';
import { API } from '../config/api'

@Injectable(
    { providedIn: 'root' }
)
export class OrdersOverviewStore {

    constructor(private fetch: DataControlService) {
        this.fetch.firstGet(API.order + '/1').subscribe((res) => {
            console.log(res)
        })
    }


}