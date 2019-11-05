import {Component, Input, OnInit} from '@angular/core';
import { DataControlService } from 'src/app/control/data-control.service';
import {element} from 'protractor';

@Component({
  selector: 'app-storage-cell',
  templateUrl: './storage-cell.component.html',
  styleUrls: ['./storage-cell.component.scss']
})
export class StorageCellComponent implements OnInit {

  @Input() elementName: string;

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {
  }

}
