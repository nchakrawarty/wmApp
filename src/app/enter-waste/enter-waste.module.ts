import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterWastePageRoutingModule } from './enter-waste-routing.module';

import { EnterWastePage } from './enter-waste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterWastePageRoutingModule
  ],
  declarations: [EnterWastePage]
})
export class EnterWastePageModule {}
