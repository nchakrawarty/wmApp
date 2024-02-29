import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  totalWaste: number = 0;
  collectionOfTheDay: number = 0;
  isRecyclableSelected: boolean = true;

  constructor(private router: Router) {
    
    // You can update the values of totalWaste and collectionOfTheDay dynamically here
    // For example:
    this.totalWaste = 100;
    this.collectionOfTheDay = 50;
  }

  switchToRecyclable() {
    this.isRecyclableSelected = true;
  }

  switchToNonRecyclable() {
    this.isRecyclableSelected = false;
  }

  goToQRScanPage() {
    this.router.navigateByUrl('qrscan');
  }
}
