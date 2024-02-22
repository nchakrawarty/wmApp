import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsInsidePageRoutingModule } from './items-inside-routing.module';

//import { ItemsInsidePage } from './items-inside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsInsidePageRoutingModule
  ],
  //declarations: [ItemsInsidePage]
})
export class ItemsInsidePageModule {}
