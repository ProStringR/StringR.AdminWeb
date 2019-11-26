import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMainNavigationComponent } from './view-main-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ViewMainNavigationRoutingModule } from './view-main-navigation-routing';

@NgModule({
  declarations: [ViewMainNavigationComponent, FooterComponent],
  exports: [
    ViewMainNavigationComponent
  ],
  imports: [
    CommonModule,
    ViewMainNavigationRoutingModule
  ]
})
export class ViewMainNavigationModule { }
