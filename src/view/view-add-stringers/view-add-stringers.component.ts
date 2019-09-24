import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-add-stringers',
  templateUrl: './view-add-stringers.component.html',
  styleUrls: ['./view-add-stringers.component.css']
})
export class ViewAddStringersComponent implements OnInit {

  private listOfYourStringers: Array<string> = new Array<string>();
  private listOfPotentialStringers: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.listOfYourStringers.push('Jaafar', 'Nadia', 'Steen', 'Liv');
    this.listOfPotentialStringers.push('Marcus', 'Frederikke', 'Frederik', 'Milisha')
  }

  getListOfYourStringers(): Array<string> {
    return this.listOfYourStringers;
  }

  getListOfPotentialStringers(): Array<string> {
    return this.listOfPotentialStringers;
  }

  onPotentialStringerClicked(index: number) {
    this.listOfYourStringers.push(this.listOfPotentialStringers[index]);

    const stringerToRemove = this.listOfPotentialStringers[index];
    this.listOfPotentialStringers = this.listOfPotentialStringers.filter(obj => obj !== stringerToRemove);

  }

  onYourStringerClicked(index: number) {
    this.listOfPotentialStringers.push(this.listOfYourStringers[index]);

    const stringerToRemove = this.listOfYourStringers[index];
    this.listOfYourStringers = this.listOfYourStringers.filter(obj => obj !== stringerToRemove);

  }
}
