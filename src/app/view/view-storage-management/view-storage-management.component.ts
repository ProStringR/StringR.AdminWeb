import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../../control/data-control.service';
import {RacketStringModel} from '../../model/model-racket-string';
import {Firebase} from '../../utility/firebase';
import {Constant} from '../../utility/constant';

@Component({
  selector: 'app-view-storage-management',
  templateUrl: './view-storage-management.component.html',
  styleUrls: ['./view-storage-management.component.scss']
})
export class ViewStorageManagementComponent implements OnInit {

  storageList: RacketStringModel[]

  constructor(private dataControl: DataControlService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.dataControl.getList<RacketStringModel>(Firebase.storage + '/' + Constant.shopId).subscribe((racketStrings) => {
      racketStrings.sort((a , b) => (a.brand > b.brand) ? 1 : -1)
      this.storageList = racketStrings;
      document.getElementById('spinner').hidden = true;
    });
  }
}
