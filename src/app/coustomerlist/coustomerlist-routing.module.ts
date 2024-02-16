import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoustomerlistPage } from './coustomerlist.page';

const routes: Routes = [
  {
    path: '',
    component: CoustomerlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoustomerlistPageRoutingModule {}
