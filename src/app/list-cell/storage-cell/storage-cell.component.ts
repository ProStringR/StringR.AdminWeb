import {Component, Input, OnInit} from '@angular/core';
import { DataControlService } from 'src/app/control/data-control.service';
import {element} from 'protractor';
import {RacketStringModel} from '../../model/model-racket-string';

@Component({
  selector: 'app-storage-cell',
  templateUrl: './storage-cell.component.html',
  styleUrls: ['./storage-cell.component.scss']
})
export class StorageCellComponent implements OnInit {

  @Input() element: RacketStringModel;

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {
  }

}
