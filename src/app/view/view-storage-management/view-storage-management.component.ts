import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../../control/data-control.service';
import { OrderModel } from 'src/app/model/model-order';

@Component({
  selector: 'app-view-storage-management',
  templateUrl: './view-storage-management.component.html',
  styleUrls: ['./view-storage-management.component.scss']
})
export class ViewStorageManagementComponent implements OnInit {

  storageList = ["Hello", "You"];

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {
    this.dataControl.getList<OrderModel>('https://prostringr.firebaseio.com/order.json').subscribe(res => {
      console.log(res)
      res.forEach(item => {
        if (item.paid) {
          console.log(item)
        }
      })
    })
  }

}
