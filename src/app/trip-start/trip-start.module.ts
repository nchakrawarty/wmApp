import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripStartPageRoutingModule } from './trip-start-routing.module';

import { TripStartPage } from './trip-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripStartPageRoutingModule
  ],
  declarations: [TripStartPage]
})
export class TripStartPageModule {}
