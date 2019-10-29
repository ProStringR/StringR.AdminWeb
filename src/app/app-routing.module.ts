import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'addstringers', loadChildren: () => import('./../view/view-add-stringers/view-add-stringers.module').then(m => m.ViewAddStringersModule)
  },
  {
    path: 'storageManagement', loadChildren: () => import('./../view/view-storage-management/view-storage-management.module').then(m => m.ViewStorageManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
