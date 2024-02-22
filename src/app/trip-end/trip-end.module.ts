import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripEndPageRoutingModule } from './trip-end-routing.module';

import { TripEndPage } from './trip-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripEndPageRoutingModule
  ],
  declarations: [TripEndPage]
})
export class TripEndPageModule {}
