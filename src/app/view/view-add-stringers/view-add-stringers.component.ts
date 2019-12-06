import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AddStringersStore } from 'src/app/store/add-stringers.store';

@Component({
  selector: 'app-view-add-stringers',
  templateUrl: './view-add-stringers.component.html',
  styleUrls: ['./view-add-stringers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ViewAddStringersComponent implements OnDestroy {

  searchYoursText
  searchPotentialText

  constructor(private store: AddStringersStore) {
    window.onbeforeunload = (e) => {
      this.saveCurrentSetup()
    }
  }

  ngAfterViewInit(): void {
    this.store.updateState()
  }

  searchPotential(search: string) {
    this.store.filterPotential = search;
  }

  searchYours(search: string) {
    this.store.filterYours = search;
  }

  onPotentialStringerClicked(index: number) {
    this.store.yourStringrs.push(this.store.potentialStringrs[index]);

    const stringerToRemove = this.store.potentialStringrs[index];
    this.store.potentialStringrs = this.store.potentialStringrs.filter(obj => obj !== stringerToRemove);

    this.saveCurrentSetup();
  }

  onYourStringerClicked(index: number) {
    this.store.potentialStringrs.push(this.store.yourStringrs[index]);

    const stringerToRemove = this.store.yourStringrs[index];
    this.store.yourStringrs = this.store.yourStringrs.filter(obj => obj !== stringerToRemove);

    this.saveCurrentSetup();
  }

  private saveCurrentSetup() {
    this.store.updateBackend();
  }

  ngOnDestroy(): void {
    this.saveCurrentSetup()
  }

}
