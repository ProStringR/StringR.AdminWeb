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

  onItemClicked(index: number) {
    const htmlElement = document.getElementsByClassName('details').item(index) as HTMLElement;

    const button = document.getElementsByClassName('btn-link').item(index) as HTMLElement;

    button.addEventListener('click', () => {
      console.log('hej steen');
      htmlElement.style.display = 'none';
    })

    if (htmlElement.style.display == null || htmlElement.style.display === '' || htmlElement.style.display === 'none') {
      htmlElement.style.display = 'block';
    } else {
      htmlElement.style.display = 'none';
    }
  }
}
