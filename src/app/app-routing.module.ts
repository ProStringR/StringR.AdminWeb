import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./view/view-login/view-login.module').then(m => m.ViewLoginModule)
  },
  {
    path: 'mainPage', loadChildren: () => import('./view/view-main-navigation/view-main-navigation.module').then(m => m.ViewMainNavigationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
