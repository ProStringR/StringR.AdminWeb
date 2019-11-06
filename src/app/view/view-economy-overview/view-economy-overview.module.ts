import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEconomyOverviewComponent } from './view-economy-overview.component'
import { Routes, RouterModule } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';

const routes: Routes = [
  {
    path: '',
    component: ViewEconomyOverviewComponent
  }
]

@NgModule({
  declarations: [ViewEconomyOverviewComponent, DatePickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
  
export class ViewEconomyOverviewModule { }
