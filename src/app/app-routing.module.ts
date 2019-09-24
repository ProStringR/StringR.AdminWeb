import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAddStringersComponent} from '../view/view-add-stringers/view-add-stringers.component';

const routes: Routes = [
  {
    path: 'addstringers', loadChildren: './../view/view-add-stringers/view-add-stringers.module#ViewAddStringersModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
