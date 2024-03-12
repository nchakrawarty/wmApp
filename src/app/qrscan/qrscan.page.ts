import { Component, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QRScanPage implements OnDestroy{

  qrstring="";
  scannedResult:any;
  content_visibility="";
  isFrontCamera = true;
  flashEnabled = false;


  constructor(private navCtrl: NavController,private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    this.qrstring = queryParams?.['username'] && queryParams?.['phone'] ?
      `<span class="math-inline">${queryParams['username']}\:</span>${queryParams['phone']}` :
      '';
  }
  
  

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
  async checkCameraPermission(): Promise<boolean> {
    try {
      // Request camera access and check if permission is granted
      await navigator.mediaDevices.getUserMedia({ video: true });
      return true; // Permission granted
    } catch (error) {
      // Permission denied or error
      console.error('Camera permission denied:', error);
      return false; // Permission denied
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
        this.router.navigate(['/qrentry'], { queryParams: { scannedData: this.scannedResult } });
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
 
  async toggleFlashlight() {
    const video = document.querySelector('video');
    if (video) {
      video.classList.toggle('flashlight-on');
    } else {
      console.error('Video element not found');
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
    this.router.navigate(['/home']);
  }
  goToQrentry() {
    this.navCtrl.navigateForward('/qrentry'); // Replace '/qrentry' with your actual qrentry page route
  }
  

}
