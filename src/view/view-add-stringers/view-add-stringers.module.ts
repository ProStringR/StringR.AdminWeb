import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAddStringersComponent } from './view-add-stringers.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewAddStringersComponent
  }
]

@NgModule({
  declarations: [ViewAddStringersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewAddStringersModule { }
