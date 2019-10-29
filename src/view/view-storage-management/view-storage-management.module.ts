import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStorageManagementComponent } from './view-storage-management.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewStorageManagementComponent
  }
]


@NgModule({
  declarations: [ViewStorageManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewStorageManagementModule { }
