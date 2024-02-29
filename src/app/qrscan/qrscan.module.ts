import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRScanPageRoutingModule } from './qrscan-routing.module';

import { QRScanPage } from './qrscan.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRScanPageRoutingModule,
    QRCodeModule,
  ],
  declarations: [QRScanPage],
  exports: [QRScanPage]
  //declarations: []
})
export class QRScanPageModule {}
