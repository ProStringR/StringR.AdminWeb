import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAddStringersComponent } from './view-add-stringers.component';
import { RouterModule, Routes } from '@angular/router';
import { MobxAngularModule } from 'mobx-angular';
import { ViewStringrDetailsComponent } from '../view-stringr-details/view-stringr-details.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAddStringersComponent
  }
]

@NgModule({
  declarations: [
    ViewAddStringersComponent,
    ViewStringrDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MobxAngularModule
  ]
})

export class ViewAddStringersModule { }
