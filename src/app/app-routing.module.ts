import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomRoutes, NonSlashRoutes } from './config/config';

const routes: Routes = [
  {
    path: '', redirectTo: CustomRoutes.mainPage, pathMatch: 'full'
  },
  {
    path: NonSlashRoutes.login,
    loadChildren: () => import('./view/view-login/view-login.module').then(m => m.ViewLoginModule)
  },
  {
    path: NonSlashRoutes.mainPage,
    loadChildren: () =>
      import('./view/view-main-navigation/view-main-navigation.module').
        then(m => m.ViewMainNavigationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
