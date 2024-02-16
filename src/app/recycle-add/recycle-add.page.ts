import { Component } from '@angular/core';

@Component({
  selector: 'app-recycle-add',
  templateUrl: './recycle-add.page.html',
  styleUrls: ['./recycle-add.page.scss'],
})
export class RecycleAddPage {
  selectedWaste: string =" ";
  kg: number = 0;
  wasteList: { id: number,waste: string, kg: number }[] = [];
  nextId: number = 1;


  constructor() {}

  saveWaste() {
    if (this.selectedWaste && this.kg > 0) {
      this.wasteList.push({ id: this.nextId++, waste: this.selectedWaste, kg: this.kg });

    // Clear input values after saving
    this.selectedWaste = " ";
    this.kg = 0;
  }
}
removeWaste(id: number) {
  this.wasteList = this.wasteList.filter(item => item.id !== id);
}
}