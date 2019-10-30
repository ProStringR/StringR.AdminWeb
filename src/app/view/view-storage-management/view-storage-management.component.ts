import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../../control/data-control.service';
import { OrderModel } from 'src/app/model/model-order';
import { RacketStringModel } from 'src/app/model/model-racket-string';

@Component({
  selector: 'app-view-storage-management',
  templateUrl: './view-storage-management.component.html',
  styleUrls: ['./view-storage-management.component.scss']
})
export class ViewStorageManagementComponent implements OnInit {

  storageList = ["Hello", "You"];

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {
    this.dataControl.getList<RacketStringModel>('https://prostringr.firebaseio.com/storage/ShopMJ.json').subscribe(res => {
      console.log(res)
    })
  }

}
