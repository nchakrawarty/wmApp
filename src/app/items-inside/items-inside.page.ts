import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-inside',
  templateUrl: './items-inside.page.html',
  styleUrls: ['./items-inside.page.scss'],
})
export class ItemsInsidePage implements OnInit {
  wasteDetails: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const wasteType = params['wasteType'];
      this.wasteDetails = this.getMockWasteDetails(wasteType);
    });
  }

  getMockWasteDetails(wasteType: string): any[] {
    let mockDetails: any[] = [];
    if (wasteType === 'Plastic') {
      mockDetails = [
        { type: 'Plastic', amount: '10 kg', dateTime: '2024-02-19 10:00:00' },
        { type: 'Plastic', amount: '8 kg', dateTime: '2024-02-19 11:30:00' },
      ];
    } else if (wasteType === 'Glass') {
      mockDetails = [
        { type: 'Glass', amount: '5 kg', dateTime: '2024-02-19 09:45:00' },
      ];
    } else if (wasteType === 'Metal') {
      mockDetails = [
        { type: 'Metal', amount: '15 kg', dateTime: '2024-02-19 13:15:00' },
        { type: 'Metal', amount: '20 kg', dateTime: '2024-02-19 14:20:00' },
      ];
    }
  
    return mockDetails;
  } 
}