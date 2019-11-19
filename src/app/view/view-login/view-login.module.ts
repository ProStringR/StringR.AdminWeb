import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLoginComponent } from './view-login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewLoginComponent
  }
]

@NgModule({
  declarations: [ViewLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ViewLoginModule { }
