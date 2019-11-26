import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { StringrModel } from 'src/app/model/model-stringr';

@Component({
  selector: 'app-view-stringr-details',
  templateUrl: './view-stringr-details.component.html',
  styleUrls: ['./view-stringr-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ViewStringrDetailsComponent {
 
  @Input() index: number;
  @Input() listIs: boolean;
  @Input() element: StringrModel;
  @Output() onSuggest: EventEmitter<any> = new EventEmitter();

  constructor() {}

  pickStringr() {
    this.onSuggest.emit([this.index]);
  }

}


