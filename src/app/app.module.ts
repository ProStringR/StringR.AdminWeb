import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMainNavigationModule } from './view/view-main-navigation/view-main-navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { RacketStringService } from './service/racket-string.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewStorageManagementModule } from './view/view-storage-management/view-storage-management.module';
import { DatePipe } from '@angular/common';
import { DataControlService } from './control/data-control.service';
import { JwtModule } from '@auth0/angular-jwt';

// Mobx
import { StorageManagementStore } from './store/storage-management.store';
import { AddStringersStore } from './store/add-stringers.store';
import { OrdersOverviewStore } from './store/orders-overview.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewMainNavigationModule,
    HttpClientModule,
    ViewStorageManagementModule,
    JwtModule,
  ],
  providers: [
    RacketStringService,
    DatePipe,
    DataControlService,
    StorageManagementStore,
    AddStringersStore,
    OrdersOverviewStore,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
