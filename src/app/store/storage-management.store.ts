import { Injectable } from "@angular/core";
import { observable, action } from 'mobx-angular';
import { RacketStringModel } from '../model/model-racket-string';
import { DataControlService } from '../control/data-control.service';
import { API } from '../config/config';
import { AuthService } from '../service/auth.service';

@Injectable(
    { providedIn: 'root' }
)

export class StorageManagementStore {

    constructor(
        private fetch: DataControlService,
        private auth: AuthService
    ) { }

    @observable
    racketStrings: RacketStringModel[] = []

    @action
    async updateState() {
        await this.fetch.getList<RacketStringModel>(API.get_racketString_by_shopId(this.auth.getUser().id)).subscribe((items) => {
            items.sort((a, b) => (a.stringBrand > b.stringBrand) ? 1 : -1)
            this.racketStrings = items
        })
    }

}