import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonrecycleAddPageRoutingModule } from './nonrecycle-add-routing.module';

import { NonrecycleAddPage } from './nonrecycle-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonrecycleAddPageRoutingModule
  ],
  declarations: [NonrecycleAddPage]
})
export class NonrecycleAddPageModule {}
