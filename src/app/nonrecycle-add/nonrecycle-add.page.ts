import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WasteService } from '../waste.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface WasteItem1 {
  newCenterid: number; 
  name: string;
  amount: number;
  date: string; 
}

interface Center {
  centerName: string;
  id: number; 
}

@Component({
  selector: 'app-nonrecycle-add',
  templateUrl: './nonrecycle-add.page.html',
  styleUrls: ['./nonrecycle-add.page.scss'],
})
export class NonrecycleAddPage {
  selectedCenter: string = "";
  selectedCenterId: number = 0; 
  selectedWaste: string = "";
  amount: number = 0;
  wasteList: WasteItem1[] = [];
  imageList: string[] = [];
  date: string; 
  centers: Center[] = [];

  constructor(
    private router: Router, 
    private wasteService: WasteService,
    private http: HttpClient
  ) {
    this.date = new Date().toISOString(); 
  }

  ngOnInit() {
    this.fetchCenters();
  }

  fetchCenters() {
    this.http.get<Center[]>(`${environment.api_base_url}/newCenters`).subscribe(data => {
      this.centers = data;
    });
  }

  onCenterChange() {
    const selectedCenter = this.centers.find(center => center.centerName === this.selectedCenter);
    if (selectedCenter) {
      this.selectedCenterId = selectedCenter.id; 
    }
  }

  addWaste() {
    if (this.selectedWaste && this.amount > 0 && this.selectedCenterId) {
      this.wasteList.push({ newCenterid: this.selectedCenterId, name: this.selectedWaste, amount: this.amount, date: this.date });

      this.selectedWaste = "";
      this.amount = 0;
    }
  }

  removeWaste(id: number) { 
    this.wasteList = this.wasteList.filter(item => item.newCenterid !== id);
  }

  saveWaste() {
    if (this.wasteList.length === 0) {
      console.warn('No waste data to save.');
      return;
    }
  
    this.wasteService.postWastes(this.wasteList).subscribe(
      response => {
        console.log('Waste data successfully posted:', response);
        this.wasteList = [];
      },
      error => {
        console.error('Error posting waste data:', error);
        if (error instanceof Error) {
          console.error('Error message:', error.message);
        } else {
          console.error('Error object:', error);
        }
      }
    );
  }
}
