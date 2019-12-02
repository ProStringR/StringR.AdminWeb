import { Injectable } from "@angular/core";
import { observable, action, computed } from 'mobx-angular';
import { DataControlService } from '../control/data-control.service';
import { StringrModel } from '../model/model-stringr';
import { API } from '../config/api';

@Injectable(
    { providedIn: 'root' }
)

export class AddStringersStore {

    constructor(private fetch: DataControlService) {
        this.updateState()
    }

    @observable
    potentialStringrs: StringrModel[] = [];

    @observable
    yourStringrs: StringrModel[] = [];

    @observable
    filterPotential: string = "";

    @observable
    filterYours: string = "";

    @action
    async updateState() {
        await this.fetch.getList<StringrModel>(API.get_stringer_by_shopId(1)).subscribe((stringrs) => {
            this.potentialStringrs = stringrs;
        });
    }

    @computed
    get allStringrsFiltered(): StringrModel[] {
        return this.potentialStringrs.filter((stringr) => JSON.stringify(stringr).toLowerCase().includes(this.filterPotential.toLowerCase()));
    }

    @computed
    get yourStringrsFiltered(): StringrModel[] {
        return this.yourStringrs.filter((stringr) => JSON.stringify(stringr).toLowerCase().includes(this.filterYours.toLowerCase()));
    }

    async updateBackend() {
        // TODO Save yourStringrs to backend.
    }

}