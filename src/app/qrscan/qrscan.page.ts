import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonContent, IonFab, IonTitle, IonIcon, IonButton, IonList, IonItem, IonLabel, IonInput, IonFabButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'qrscan.page.html',
  styleUrls: ['qrscan.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonInput, IonLabel, IonItem, IonList, IonButton, IonIcon, IonTitle, IonFab, IonContent, IonToolbar, IonHeader, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class QRScanPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];


  constructor(private alertController: AlertController) {}

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
