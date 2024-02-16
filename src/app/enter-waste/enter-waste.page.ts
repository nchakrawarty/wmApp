import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-waste',
  templateUrl: './enter-waste.page.html',
  styleUrls: ['./enter-waste.page.scss'],
})
export class EnterWastePage implements OnInit {

  
  constructor(private navCtrl: NavController) {}
  
  navigateBacktoqrentry() {
    this.navCtrl.navigateBack('/qrentry'); 
  }


  ngOnInit() {
  }

}
