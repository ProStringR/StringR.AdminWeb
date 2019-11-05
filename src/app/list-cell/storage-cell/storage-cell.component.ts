import {Component, Input, OnInit} from '@angular/core';
import {RacketStringModel} from '../../model/model-racket-string';
import {RacketStringService} from '../../service/racket-string.service';

@Component({
  selector: 'app-storage-cell',
  templateUrl: './storage-cell.component.html',
  styleUrls: ['./storage-cell.component.scss']
})
export class StorageCellComponent implements OnInit {

  @Input() element: RacketStringModel;
  stringTypeIndicator: string;
  description: string;

  constructor(private racketStringService: RacketStringService) { }

  ngOnInit() {
    this.stringTypeIndicator = '../../../assets/images/' + this.racketStringService.getStringTypeIndicator(this.element);
    this.description = this.racketStringService.getRacketStringDescription(this.element);
  }

}
