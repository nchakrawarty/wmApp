import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarcodeScanner} from '@capacitor-community/barcode-scanner';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Haptics } from '@capacitor/haptics';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QRScanPage implements OnDestroy{

  qrstring="This is a Secret qrcode message";
  scannedResult:any;
  content_visibility="";
  isFrontCamera = true;
  flashEnabled = false;


  constructor(private router: Router,private flashlight: Flashlight) {}

  async checkPermission(): Promise<boolean>{
    try{
       //check or Request Permission
       const status = await BarcodeScanner.checkPermission({ force: true });
       if(status.granted){
         //the user granted permission
         return true;
       }
       return false;
    }catch(e){
      console.log(e);
      return false;
    }
  }

  async startScan():Promise<void>{
    try{
      const permission=await this.checkPermission();
      if(!permission){
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      this.content_visibility="hidden";


      const result=await BarcodeScanner.startScan();
      if(result?.hasContent){
        this.scannedResult=result.content;
        BarcodeScanner.showBackground();
        console.log(this.scannedResult);
        document.querySelector('body')?.classList.remove('scanner-active');
        this.content_visibility="";
      }
    }catch(e){
      console.log(e);
      this.stopScan();
    }
  }

  
  toggleCamera() {
    this.isFrontCamera = !this.isFrontCamera; // Toggle camera
    this.stopScan(); // Stop current scan before switching cameras
    this.startScan(); // Start a new scan with the new camera
  }
  
  toggleFlashlight() {
    if (this.flashlight.isSwitchedOn()) {
      this.flashlight.switchOff();
    } else {
      this.flashlight.switchOn();
    }
  }

  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
    this.content_visibility="";
  }

  ngOnDestroy(): void {
      this.stopScan();
  }
  navigateBack() {
    // Navigate to the home route using Router
    this.router.navigate(['/home']); 
  }

}



/*import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonContent, IonFab, IonTitle, IonIcon, IonButton, IonList, IonItem, IonLabel, IonInput, IonFabButton, IonButtons, IonCard, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'qrscan.page.html',
  styleUrls: ['qrscan.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonButtons, IonFabButton, IonInput, IonLabel, IonItem, IonList, IonButton, IonIcon, IonTitle, IonFab, IonContent, IonToolbar, IonHeader, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent],
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
*/