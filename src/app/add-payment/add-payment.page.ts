import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.page.html',
  styleUrls: ['./add-payment.page.scss'],
})
export class AddPaymentPage implements OnInit {

  constructor(private navCtrl: NavController) {}
  
  navigateBacktoqrentry() {
    this.navCtrl.navigateBack('/qrentry'); 
  }

  ngOnInit() {
  }

}
