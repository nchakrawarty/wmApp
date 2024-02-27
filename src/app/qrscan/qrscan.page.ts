import { Component, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'qrscan.page.html',
  styleUrls: ['qrscan.page.scss'],
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
