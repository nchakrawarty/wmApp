import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedOption: string = '';
  jsonData: Record[] = [];
  selectedRecords: Record[] = [];
  totalAmount: number = 0;
  totalKilograms: number = 0;
  currentTab: string = 'details';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedOption = params['type']; // Get the selected waste type from URL parameters
      this.fetchItems();
    });
  }

  fetchItems() {
    const apiUrl = `${environment.api_base_url}/newWasteCollecteds`;

    this.http.get<Record[]>(apiUrl).subscribe(data => {
      console.log("All data:", data);
      this.jsonData = data.filter(record => record.name === this.selectedOption);
      console.log("Filtered data:", this.jsonData);
      this.displayDetails(); // Display filtered records
    });
  }

  displayDetails() {
    this.selectedRecords = this.jsonData;
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
