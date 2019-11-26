import { Component, OnInit, Output, ComponentFactoryResolver } from '@angular/core';
import { AddStringersStore } from 'src/app/store/add-stringers.store';
import { autorun } from 'mobx';
import { StringrModel } from 'src/app/model/model-stringr';

@Component({
  selector: 'app-view-add-stringers',
  templateUrl: './view-add-stringers.component.html',
  styleUrls: ['./view-add-stringers.component.scss']
})
export class ViewAddStringersComponent implements OnInit {

  constructor(public store: AddStringersStore) { }

  ngOnInit() {}

  onPotentialStringerClicked(index: number) {
    this.store.yourStringrs.push(this.store.allStringrs[index]);

    const stringerToRemove = this.store.allStringrs[index];
    this.store.allStringrs = this.store.allStringrs.filter(obj => obj !== stringerToRemove);

  }

  onYourStringerClicked(index: number) {
    this.store.allStringrs.push(this.store.yourStringrs[index]);

    const stringerToRemove = this.store.yourStringrs[index];
    this.store.yourStringrs = this.store.yourStringrs.filter(obj => obj !== stringerToRemove);
  }
}
