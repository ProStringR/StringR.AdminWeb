import { Injectable } from "@angular/core";
import { observable, action, computed } from 'mobx-angular';
import { DataControlService } from '../control/data-control.service';
import { StringrModel } from '../model/model-stringr';
import { API } from '../config/config';
import { AuthService } from '../service/auth.service';

@Injectable(
    { providedIn: 'root' }
)

export class AddStringersStore {

    constructor(
        private fetch: DataControlService,
        private auth: AuthService
    ) {
        this.updateState();
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
    public async updateState() {
        // TODO -> Team_Id Skal komme fra Shop / Team, og ikke bare være 1 i fremtiden.
        await this.fetch.getList<StringrModel>(API.get_stringer_by_shopId(1)).subscribe((stringrs) => {
            this.yourStringrs = stringrs;
        });
    }

    @computed
    public get allStringrsFiltered(): StringrModel[] {
        return this.potentialStringrs.filter((stringr) => JSON.stringify(stringr).toLowerCase().includes(this.filterPotential.toLowerCase()));
    }

    @computed
    public get yourStringrsFiltered(): StringrModel[] {
        return this.yourStringrs.filter((stringr) => JSON.stringify(stringr).toLowerCase().includes(this.filterYours.toLowerCase()));
    }

    public async updateBackend() {
        // TODO Save yourStringrs to backend.
    }

}