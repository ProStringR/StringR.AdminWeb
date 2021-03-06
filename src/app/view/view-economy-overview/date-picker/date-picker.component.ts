import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent {

  @Output() onEmit: EventEmitter<any> = new EventEmitter();

  buttons = [
    {
      title: "7d",
      click: 604800000
    },
    {
      title: "2w",
      click: 1209600000
    },
    {
      title: "4w",
      click: 2419200000
    },
    {
      title: "2m",
      click: 5184000000
    },
    {
      title: "1y",
      click: 31556952000
    }
  ]

  constructor() { }

  pickDate(click: number) {
    this.onEmit.emit([click]);
  }

}
