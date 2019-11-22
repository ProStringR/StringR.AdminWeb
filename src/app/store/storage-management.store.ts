import { Injectable } from "@angular/core";
import { observable, action } from 'mobx-angular';
import { RacketStringModel } from '../model/model-racket-string';
import { DataControlService } from '../control/data-control.service';
import { Firebase } from '../utility/firebase';
import { Constant } from '../utility/constant';


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
        await this.fetch.getList<RacketStringModel>(Firebase.storage + '/' + Constant.shopId).subscribe((items) => {
            items.sort((a, b) => (a.brand > b.brand) ? 1 : -1)
            this.racketStrings = items
        })
    }

}