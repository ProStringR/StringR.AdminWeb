import { Injectable } from "@angular/core";
import { observable, action, computed } from 'mobx-angular';
import { RacketStringModel } from '../model/model-racket-string';
import { DataControlService } from '../control/data-control.service';
import { API } from '../config/api';

@Injectable(
    { providedIn: 'root' }
)
export class StorageManagementStore {

    constructor(private fetch: DataControlService) {
        this.updateState()
    }

    @observable
    racketStrings: RacketStringModel[] = []

    @action
    async updateState() {
        await this.fetch.getList<RacketStringModel>(API.get_racketString_by_shopId(1)).subscribe((items) => {
            items.sort((a, b) => (a.stringBrand > b.stringBrand) ? 1 : -1)
            this.racketStrings = items
        })
    }

}