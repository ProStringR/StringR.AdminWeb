import { Injectable } from "@angular/core";
import { observable, action, computed } from 'mobx-angular';
import { DataControlService } from '../control/data-control.service';
import { Firebase } from '../utility/firebase';
import { StringrModel } from '../model/model-stringr';

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
        await this.fetch.getList<StringrModel>(Firebase.stringer).subscribe((stringrs) => {
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