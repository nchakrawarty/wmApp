import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ItemsInsidePage } from './items-inside';

const routes: Routes = [
  {
    path: '',
    //component: ItemsInsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsInsidePageRoutingModule {}
