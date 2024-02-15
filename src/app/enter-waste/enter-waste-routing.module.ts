import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterWastePage } from './enter-waste.page';

const routes: Routes = [
  {
    path: '',
    component: EnterWastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterWastePageRoutingModule {}
