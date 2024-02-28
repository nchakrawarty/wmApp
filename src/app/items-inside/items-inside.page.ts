import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Record {
  name: string;
  amount: number;
  date: string;
  id: string;
  newCenterId: number;
}

@Component({
  selector: 'app-items-inside',
  templateUrl: 'items-inside.page.html',
  styleUrls: ['items-inside.page.scss'],
})
export class ItemsInsidePage {
  selectedOption!: string;
  jsonData!: Record[];
  selectedRecords!: Record[];
  totalAmount: number = 0; 
  totalKilograms: number = 0; 
  currentTab: string = 'details'; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiUrl = `${environment.api_base_url}/newWasteCollecteds`;

    this.http.get<Record[]>(apiUrl).subscribe(data => {
      this.jsonData = data;
      this.selectedOption = 'KRT'; // Default selection
      this.displayDetails();
    });
  }

  displayDetails() {
    this.selectedRecords = this.jsonData.filter(record => record.name === this.selectedOption);
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalAmount = this.selectedRecords.reduce((total, record) => total + record.amount, 0);
    this.totalKilograms = this.selectedRecords.length; 
  }

  switchTab(tab: string) {
    this.currentTab = tab;
  }
}
