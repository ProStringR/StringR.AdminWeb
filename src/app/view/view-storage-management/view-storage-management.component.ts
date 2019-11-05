import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../../control/data-control.service';

@Component({
  selector: 'app-view-storage-management',
  templateUrl: './view-storage-management.component.html',
  styleUrls: ['./view-storage-management.component.scss']
})
export class ViewStorageManagementComponent implements OnInit {

  storageList = ['Hello', 'You'];

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {}

}
