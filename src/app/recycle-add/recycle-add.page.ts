import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WasteService } from '../waste.service';

interface WasteItem {
  newCenterid: number;
  name: string;
  amount: number;
  date: string; 
}

@Component({
  selector: 'app-recycle-add',
  templateUrl: './recycle-add.page.html',
  styleUrls: ['./recycle-add.page.scss'],
})
export class RecycleAddPage {
  selectedWaste: string = "";
  amount: number = 0;
  wasteList: WasteItem[] = [];
  nextId: number = 1;
  imageList: string[] = [];
  date: string; 

  constructor(private router: Router, private wasteService: WasteService) {
    this.date = new Date().toISOString(); 
  }

  addWaste() {
    if (this.selectedWaste && this.amount > 0) {
      this.wasteList.push({ newCenterid: this.nextId++, name: this.selectedWaste, amount: this.amount, date: this.date });

      
      this.selectedWaste = "";
      this.amount = 0;
    }
  }

  removeWaste(id: number) {
    this.wasteList = this.wasteList.filter(item => item.newCenterid !== id);
  }

  saveWaste() {
    this.wasteService.postWastes(this.wasteList).subscribe(
      response => {
        console.log('Waste data successfully posted:', response);
        

        
        this.wasteList = [];
      },
      error => {
        console.error('Error posting waste data:', error);
       
      }
    );
  }
}
