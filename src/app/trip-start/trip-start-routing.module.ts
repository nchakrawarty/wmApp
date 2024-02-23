import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripStartPage } from './trip-start.page';

const routes: Routes = [
  {
    path: '',
    component: TripStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripStartPageRoutingModule {}
