import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMainNavigationModule } from './view/view-main-navigation/view-main-navigation.module';
import { DatePickerComponent } from './view-generic/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewMainNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
