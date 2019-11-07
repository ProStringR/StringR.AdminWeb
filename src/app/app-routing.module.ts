import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'addstringers', loadChildren: () => import('./view/view-add-stringers/view-add-stringers.module').then(m => m.ViewAddStringersModule),
  },
  {
    path: 'economy', loadChildren: () => import('./view/view-economy-overview/view-economy-overview.module').then(m => m.ViewEconomyOverviewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
