import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMainNavigationModule } from './view/view-main-navigation/view-main-navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { RacketStringService } from './service/racket-string.service';
import { DatePickerComponent } from './view-generic/date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewMainNavigationModule
    ViewMainNavigationModule,
    HttpClientModule
  ],
  providers: [RacketStringService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
