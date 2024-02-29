import { Component, OnDestroy } from '@angular/core';
<<<<<<< HEAD
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
=======
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
>>>>>>> ebaf700009c0f19d3fd5780fc223d5a611f7bb9c

@Component({
  selector: 'app-home',
  templateUrl: 'qrscan.page.html',
  styleUrls: ['qrscan.page.scss'],
<<<<<<< HEAD
  standalone: true,
  imports: [IonCardContent, IonCard, IonButtons, IonFabButton, IonInput, IonLabel, IonItem, IonList, IonButton, IonIcon, IonTitle, IonFab, IonContent, IonToolbar, IonHeader, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent],
=======
>>>>>>> ebaf700009c0f19d3fd5780fc223d5a611f7bb9c
})
export class QRScanPage implements OnDestroy{

  qrstring="This is a Secret qrcode message";
  scannedResult:any;
  content_visibility="";


  constructor() {}

  async checkPermission(){
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

  async startScan(){
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

  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
    this.content_visibility="";
  }

  ngOnDestroy(): void {
      this.stopScan();
  }

}
*/