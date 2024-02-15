

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecycleAddPage } from './recycle-add.page';

const routes: Routes = [
  {
    path: '',
    component: RecycleAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecycleAddPageRoutingModule {}