import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEconomyOverviewComponent } from './view-economy-overview.component'
import { Routes, RouterModule } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { EconomyGraphComponent } from './economy-graph/economy-graph.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
  {
    path: '',
    component: ViewEconomyOverviewComponent
  }
]

@NgModule({
  declarations: [
    ViewEconomyOverviewComponent,
    DatePickerComponent,
    EconomyGraphComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule
  ]
})

export class ViewEconomyOverviewModule { }
