import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  totalWaste: number = 0;
  totalWasteToday: number = 0;
  todayDate: string = 'date'; 
  centerName: string = 'defaultcenter';
  isRecyclableSelected: boolean = true;

  recyclableButton: any;
  nonRecyclableButton: any;

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.recyclableButton = document.getElementById('recyclable-button');
    this.nonRecyclableButton = document.getElementById('non-recyclable-button');
    if(this.nonRecyclableButton != null) {
      this.nonRecyclableButton.style.opacity=0.55;
    }
    this.fetchItems();
    this.todayDate = this.getFormattedDate(new Date());
  }

  fetchItems() {
    this.http.get<any[]>('assets/data/data.json').subscribe(data => {
      this.totalWaste = this.calculateTotalWaste(data);
      this.totalWasteToday = this.calculateTotalWasteToday(data);
    });
  }

  calculateTotalWaste(items: any[]): number {
    return parseFloat((items.reduce((total, item) => total + item.amount, 0)).toFixed(2));
  }

  calculateTotalWasteToday(items: any[]): number {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Get today's date in 'yyyy-mm-dd' format
    return parseFloat((items.filter(item => item.date.includes(todayString))
      .reduce((total, item) => total + item.amount, 0)).toFixed(2));
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

  getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '/' + month + '/' + year;
  }
}
