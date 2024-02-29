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
  collectionDate: string = '28/02/2024'; 
  centerName: string = 'defaultcenter';
  isRecyclableSelected: boolean = true;

  recyclableItems: string[] = ['Recyclable Item 1', 'Recyclable Item 2', 'Recyclable Item 3'];
  nonRecyclableItems: string[] = ['Non-Recyclable Item 1', 'Non-Recyclable Item 2', 'Non-Recyclable Item 3'];

  constructor(private router: Router) {}

  showRecyclableItems() {
    console.log('recyclable')
    this.isRecyclableSelected = true;
  }

  showNonRecyclableItems() {
    console.log('nonrecyclable')
    this.isRecyclableSelected = false;
  }

  goToQRScanPage() {
    this.router.navigateByUrl('/qrscan');
  }
}
