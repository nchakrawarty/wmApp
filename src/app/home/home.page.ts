import { Component, OnInit } from '@angular/core';
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

  recyclableButton: any;
  nonRecyclableButton: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.recyclableButton = document.getElementById('recyclable-button');
    this.nonRecyclableButton = document.getElementById('non-recyclable-button');
    if(this.nonRecyclableButton != null) {
      this.nonRecyclableButton.style.opacity=0.55;
    }
  }

  addWaste() {
    if(this.isRecyclableSelected) {
      console.log("Redirect to add recyclable");
      this.router.navigate(['recycle-add']);
    } else {
      console.log("Redirect to add non-recyclable");
      this.router.navigate(['nonrecycle-add']);
    }
  }

  showRecyclableItems() {
    console.log('recyclable');
    this.isRecyclableSelected = true;
    if(this.nonRecyclableButton != null) {
      this.nonRecyclableButton.style.opacity=0.6;
    }
    if(this.recyclableButton != null) {
      this.recyclableButton.style.opacity=1.0;
    }
  }

  showNonRecyclableItems() {
    console.log('nonrecyclable');
    this.isRecyclableSelected = false;
    if(this.nonRecyclableButton != null) {
      this.nonRecyclableButton.style.opacity=1.0;
    }
    if(this.recyclableButton != null) {
      this.recyclableButton.style.opacity=0.6;
    }
  }

  goToQRScanPage() {
    this.router.navigateByUrl('/qrscan');
  }
}
