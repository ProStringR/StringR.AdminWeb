import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMainNavigationComponent } from './view-main-navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ViewMainNavigationComponent, FooterComponent],
  exports: [
    ViewMainNavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewMainNavigationModule { }
