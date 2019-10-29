import { Component, OnInit } from '@angular/core';
import { DataControlService } from 'src/app/control/data-control.service';

@Component({
  selector: 'app-storage-cell',
  templateUrl: './storage-cell.component.html',
  styleUrls: ['./storage-cell.component.scss']
})
export class StorageCellComponent implements OnInit {

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {
  }

}
