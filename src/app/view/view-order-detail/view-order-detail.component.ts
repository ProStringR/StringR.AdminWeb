import {Component, Input, OnInit} from '@angular/core';
import {OrderModel} from '../../model/model-order';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-view-order-detail',
  templateUrl: './view-order-detail.component.html',
  styleUrls: ['./view-order-detail.component.scss']
})
export class ViewOrderDetailComponent implements OnInit {

  @Input() element: OrderModel;

  firstLabelRow = ['String Brand', 'String Model', 'String Type'];
  firstValueRow = [];
  secondLabelRow = ['Tension', 'Price', 'Delivery Date'];
  secondValueRow = [];
  thirdLabelRow = ['Racket Brand', 'Racket Model', 'Stringer'];
  thirdValueRow = [];
  fourthLabelRow = ['Customer', 'Phone Number', 'Email'];
  fourthValueRow = [];

  labels = [this.firstLabelRow, this.secondLabelRow, this.thirdLabelRow, this.fourthLabelRow];
  values = [this.firstValueRow, this.secondValueRow, this.thirdValueRow, this.fourthValueRow];

  constructor(public datePipe: DatePipe) { }

  ngOnInit() {
    this.firstValueRow = [this.element.racketString.brand, this.element.racketString.model, this.element.racketString.purpose];
    this.secondValueRow = ['M: ' + this.element.tensionVertical + ' C: ' + this.element.tensionHorizontal, this.element.price, this.datePipe.transform(new Date(this.element.deliveryDate), 'dd/MM/yyyy')];
    this.thirdValueRow = [this.element.racket.brand, this.element.racket.model, this.element.stringer.firstName];
    this.fourthValueRow = [this.element.customer.firstName + ' ' + this.element.customer.lastName, this.element.customer.phone, this.element.customer.email];
  }

}
