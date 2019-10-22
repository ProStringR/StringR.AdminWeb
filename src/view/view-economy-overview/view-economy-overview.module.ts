import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEconomyOverviewComponent } from './view-economy-overview.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewEconomyOverviewComponent
  }
]

@NgModule({
  declarations: [ViewEconomyOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewEconomyOverviewModule { }
