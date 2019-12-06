import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StorageManagementStore } from 'src/app/store/storage-management.store';

@Component({
  selector: 'app-view-storage-management',
  templateUrl: './view-storage-management.component.html',
  styleUrls: ['./view-storage-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ViewStorageManagementComponent {

  constructor(private store: StorageManagementStore) { }
  ngAfterViewInit(): void { this.store.updateState(); }

}
