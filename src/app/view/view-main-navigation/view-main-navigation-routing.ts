import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMainNavigationComponent } from './view-main-navigation.component';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { AuthService } from 'src/app/service/auth.service';
import { CustomRoutes, NonSlashRoutes } from './../../config/config';

const routes: Routes = [
    {
        path: '', component: ViewMainNavigationComponent, canActivateChild: [AuthGuardService], children: [
            {
                path: '', redirectTo: CustomRoutes.economy, pathMatch: 'full'
            },
            {
                path: NonSlashRoutes.economy,
                loadChildren: () => import('./../view-economy-overview/view-economy-overview.module').
                    then(m => m.ViewEconomyOverviewModule)
            },
            {
                path: NonSlashRoutes.addstringers,
                loadChildren: () => import('./../view-add-stringers/view-add-stringers.module').
                    then(m => m.ViewAddStringersModule)
            },
            {
                path: NonSlashRoutes.storageManagement,
                loadChildren: () => import('./../view-storage-management/view-storage-management.module').
                    then(m => m.ViewStorageManagementModule)
            },
            {
                path: NonSlashRoutes.orderOverview,
                loadChildren: () => import('./../view-order-overview/view-order-overview.module').
                    then(m => m.ViewOrderOverviewModule)
            },
            {
                path: '**', redirectTo: CustomRoutes.login, pathMatch: 'full'
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        AuthService,
        AuthGuardService
    ]
})

export class ViewMainNavigationRoutingModule { }





