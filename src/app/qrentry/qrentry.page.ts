import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-qrentry',
  templateUrl: './qrentry.page.html',
  styleUrls: ['./qrentry.page.scss'],
})
export class QREntryPage implements OnInit {

  name: string = '';
  contact: string = '';


  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}
  
  navigateBack() {
    this.navCtrl.back();
  }
  

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    const scannedData = queryParams['scannedData']; // Use index signature

    if (scannedData) {
      const [username, phone] = scannedData.split(':');
      this.name = username;
      this.contact = phone;
    }
  }

}
