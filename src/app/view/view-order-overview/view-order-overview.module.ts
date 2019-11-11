import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ViewOrderOverviewComponent} from './view-order-overview.component';
import {ViewOrderDetailComponent} from '../view-order-detail/view-order-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOrderOverviewComponent
  }
]

@NgModule({
  declarations: [ViewOrderOverviewComponent, ViewOrderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ViewOrderOverviewModule { }
