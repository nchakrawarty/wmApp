import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QRScanPage } from './qrscan.page';
// import { QRCodeModule } from 'angularx-qrcode';

import { QRScanPageRoutingModule } from './qrscan-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRScanPageRoutingModule,
    // QRCodeModule
  ],
  declarations: [QRScanPage]
})
export class QRScanPageModule {}
