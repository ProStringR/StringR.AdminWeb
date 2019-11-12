import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMainNavigationModule } from './view/view-main-navigation/view-main-navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { RacketStringService } from './service/racket-string.service';
import { DatePickerComponent } from './view-generic/date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewStorageManagementModule } from './view/view-storage-management/view-storage-management.module';
import { DatePipe } from '@angular/common';
import { DataControlService } from './control/data-control.service';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewMainNavigationModule,
    HttpClientModule,
    ViewStorageManagementModule,
  ],
  providers: [
    RacketStringService,
    DatePipe,
    DataControlService,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
