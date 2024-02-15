import { AfterViewInit,Component,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController, IonRow } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonicModule } from '@ionic/angular';
/*import{Plugins} from '@capacitor/core';
const { BarcodeScanner }=Plugins;*/

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class QRScanPage implements AfterViewInit,OnDestroy{

  result:any=null;
  scanActive = false;

  constructor(private alertController: AlertController) {}

  ngAfterViewInit() {
    BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    BarcodeScanner.stopScan();
  }

  async startScanner(){
    const allowed = await this.checkPermission();
    if(allowed){
      this.scanActive = true;
      const result =await BarcodeScanner.startScan();
      BarcodeScanner.hideBackground();
      if (result.hasContent){
        this.result=result.content;
        this.scanActive = false;
      }
      
    }
    
    
  }

 async checkPermission(){
  return new Promise(async(resolve,reject)=>{
    const status = await BarcodeScanner.checkPermission({force:true});
    if (status.granted) {
      resolve(true);
    } else if (status.denied) {
      const alert= await this.alertController.create({
        header:'No permission',
        message:'Please allow camera access in your settings',
        buttons:[{
          text:'No',
          role:'cancel'
        },
        {
          text:'Open Settings',
          handler: ()=> {
            resolve(false);
            BarcodeScanner.openAppSettings();
          }
        }]
      });

      await alert.present();

    } else {
      resolve(false);
    }
  });
  
 } 

 stopScanner(){
  BarcodeScanner.stopScan();
  this.scanActive= false;

 }
    
}
