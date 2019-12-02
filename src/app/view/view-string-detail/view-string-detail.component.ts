import { Component, Input, OnInit } from '@angular/core';
import { RacketStringService } from '../../service/racket-string.service';
import { RacketStringModel } from '../../model/model-racket-string';

@Component({
  selector: 'app-view-string-detail',
  templateUrl: './view-string-detail.component.html',
  styleUrls: ['./view-string-detail.component.scss']
})

export class ViewStringDetailComponent implements OnInit {

  @Input() element: RacketStringModel;
  topRowLabels = ['Brand', 'Model', 'Type'];
  bottomRowLabels = ['Remaining Rackets', 'Price Per Racket'];
  topRowValues = [];
  bottomRowValues = [];

  constructor(private racketStringService: RacketStringService) { }

  ngOnInit() {
    this.topRowValues = [this.element.stringBrand, this.element.stringModel, this.element.stringType];
    this.bottomRowValues = [this.racketStringService.getRacketsRemaining(this.element), this.element.price];
  }

}
