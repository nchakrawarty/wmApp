import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QREntryPageRoutingModule } from './qrentry-routing.module';

import { QREntryPage } from './qrentry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QREntryPageRoutingModule
  ],
  declarations: [QREntryPage]
})
export class QREntryPageModule {}
