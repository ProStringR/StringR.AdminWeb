import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewOrderOverviewComponent } from './view-order-overview.component';
import { ViewOrderDetailComponent } from '../view-order-detail/view-order-detail.component';
import { OrderHistoryCellComponent } from '../../list-cell/order-history-cell/order-history-cell.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ViewOrderOverviewComponent
  }
]

@NgModule({
  declarations: [ViewOrderOverviewComponent, ViewOrderDetailComponent, OrderHistoryCellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ViewOrderOverviewModule { }
