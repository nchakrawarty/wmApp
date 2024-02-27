import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonrecycleAddPage } from './nonrecycle-add.page';

const routes: Routes = [
  {
    path: '',
    component: NonrecycleAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonrecycleAddPageRoutingModule {}
