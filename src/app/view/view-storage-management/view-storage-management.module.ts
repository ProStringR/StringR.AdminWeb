import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStorageManagementComponent } from './view-storage-management.component';
import { RouterModule, Routes } from '@angular/router';
import {StorageCellComponent} from '../../list-cell/storage-cell/storage-cell.component';
import {PurchaseHistoryCellComponent} from '../../list-cell/purchase-history-cell/purchase-history-cell.component';
import {AppModule} from '../../app.module';
import {ViewStringDetailComponent} from '../view-string-detail/view-string-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ViewStorageManagementComponent
  }
]


@NgModule({
  declarations: [ViewStorageManagementComponent, StorageCellComponent, PurchaseHistoryCellComponent, ViewStringDetailComponent],
  exports: [
    PurchaseHistoryCellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ViewStorageManagementModule { }
