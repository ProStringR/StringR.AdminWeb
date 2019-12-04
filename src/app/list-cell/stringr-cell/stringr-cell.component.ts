import { Component, Input } from '@angular/core';
import { StringrModel } from 'src/app/model/model-stringr';

@Component({
  selector: 'app-stringr-cell',
  templateUrl: './stringr-cell.component.html',
  styleUrls: ['./stringr-cell.component.scss']
})

export class StringrCellComponent {
  @Input() element: StringrModel;
  constructor() { }
}
