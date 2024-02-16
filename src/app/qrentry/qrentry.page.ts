import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-qrentry',
  templateUrl: './qrentry.page.html',
  styleUrls: ['./qrentry.page.scss'],
})
export class QREntryPage implements OnInit {



  constructor(private navCtrl: NavController) {}
  
  navigateBack() {
    this.navCtrl.navigateBack('/qrscan'); 
  }

  ngOnInit() {
  }

}
