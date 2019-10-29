import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-storage-management',
  templateUrl: './view-storage-management.component.html',
  styleUrls: ['./view-storage-management.component.scss']
})
export class ViewStorageManagementComponent implements OnInit {

  storageList = ["Hello", "You"];

  constructor() { }

  ngOnInit() {
  }

}
