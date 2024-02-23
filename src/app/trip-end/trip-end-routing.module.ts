import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripEndPage } from './trip-end.page';

const routes: Routes = [
  {
    path: '',
    component: TripEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripEndPageRoutingModule {}
