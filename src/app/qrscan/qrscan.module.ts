import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QRScanPage } from './qrscan.page';
// import { QRCodeModule } from 'angularx-qrcode';

import { QRScanPageRoutingModule } from './qrscan-routing.module';

<<<<<<< HEAD
import { QRScanPage } from './qrscan.page';
import { QRCodeModule } from 'angularx-qrcode';
=======
>>>>>>> ebaf700009c0f19d3fd5780fc223d5a611f7bb9c

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRScanPageRoutingModule,
<<<<<<< HEAD
    QRCodeModule,
  ],
  declarations: [QRScanPage],
  exports: [QRScanPage]
  //declarations: []
=======
    // QRCodeModule
  ],
  declarations: [QRScanPage]
>>>>>>> ebaf700009c0f19d3fd5780fc223d5a611f7bb9c
})
export class QRScanPageModule {}
