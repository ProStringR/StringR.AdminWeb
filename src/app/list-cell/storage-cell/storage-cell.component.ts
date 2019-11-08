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
  @Input() status = false;
  stringTypeIndicator: string;
  racketRemainingIndicator: string;
  description: string;
  topRowLabels = ['Brand', 'Model', 'Type'];
  bottomRowLabels = ['Remaining Rackets', 'Price Per Racket'];
  topRowValues = [];
  bottomRowValues = [];

  constructor(private racketStringService: RacketStringService) { }

  ngOnInit() {
    this.stringTypeIndicator = '../../../assets/images/' + this.racketStringService.getStringTypeIndicator(this.element);
    this.racketRemainingIndicator = '../../../assets/images/' + this.racketStringService.getStockStatus(this.element);
    this.description = this.racketStringService.getRacketStringDescription(this.element);

    this.topRowValues = ['babolat', this.element.modelName, 'fuck dig selv'];
    this.bottomRowValues = [this.racketStringService.getRacketsRemaining(this.element), this.element.pricePerRacket];

    console.log(this.element.purchaseHistory);
  }
}
