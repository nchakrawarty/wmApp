import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  currentTab: string = 'details'; // Default tab

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Record[]>('assets/items-inside.json').subscribe(data => {
      this.jsonData = data;
      this.selectedOption = 'KRT'; // Default selection
      this.displayDetails();
    });
  }

  displayDetails() {
    this.selectedRecords = this.jsonData.filter(record => record.name === this.selectedOption);
  }

  switchTab(tab: string) {
    this.currentTab = tab;
  }
}
