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
    allStringrs: StringrModel[] = [];

    @observable
    yourStringrs: StringrModel[] = [];

    @action
    async updateState() {
        await this.fetch.getList<StringrModel>(Firebase.stringer).subscribe((items) => {
            this.allStringrs = items;
        });
    }

    async updateBackend() {
        // TODO Save yourStringrs to backend.
    }

}