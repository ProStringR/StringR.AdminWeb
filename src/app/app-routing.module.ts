import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./view/view-login/view-login.module').then(m => m.ViewLoginModule)
  },
  {
    path: 'economy', loadChildren: () => import('./view/view-economy-overview/view-economy-overview.module').then(m => m.ViewEconomyOverviewModule)
  },
  {
    path: 'addstringers', loadChildren: () => import('./view/view-add-stringers/view-add-stringers.module').then(m => m.ViewAddStringersModule)
  },
  {
    path: 'storageManagement', loadChildren: () => import('./view/view-storage-management/view-storage-management.module').then(m => m.ViewStorageManagementModule)
  },
  {
    path: 'orderOverview', loadChildren: () => import('./view/view-order-overview/view-order-overview.module').then(m => m.ViewOrderOverviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
