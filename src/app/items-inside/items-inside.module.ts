import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ItemsInsidePageRoutingModule } from './items-inside-routing.module';

import { ItemsInsidePage } from './items-inside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsInsidePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemsInsidePage
      }
    ])
  ],
  declarations: [ItemsInsidePage]
})
export class ItemsInsidePageModule {}
