import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-start',
  templateUrl: './trip-start.page.html',
  styleUrls: ['./trip-start.page.scss'],
})
export class TripStartPage implements OnInit {

  date: string = '';
  time: string = '';
  vehicleNum: string = '';
  driverName: string = '';
  lineEmp1: string = '';
  lineEmp2: string = '';
  newCenterId: any = '';

  constructor(private location: Location, private tripService: TripService) { }

  ngOnInit() {
    this.newCenterId = this.location.getState();
    this.newCenterId = this.newCenterId[0];
    let d = new Date()
    this.time = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
    this.date = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, '0') + "-" + String(d.getDate()).padStart(2, '0');
  }

  startTrip() {
    let vehicleTrack = {
      'date': this.date,
      'vehicleNum': this.vehicleNum,
      'startTime': this.time,
      'endTime': '',
      'status': 'active',
      'driverName': this.driverName,
      'lineEmp1': this.lineEmp1,
      'lineEmp2': this.lineEmp2,
      'newCenterId': this.newCenterId
    }
    let toast = document.getElementById('submit-status');
    if(this.date!='' && this.vehicleNum!='' && this.time!='' && this.driverName!='' && this.lineEmp1!='' && this.lineEmp2!='') {
      this.tripService.addVehicleTrack(vehicleTrack).then(data => {
        console.log(data);
      });
      toast?.setAttribute("message","New trip started!");
      this.location.back();
    } else {
      toast?.setAttribute("message","Failed to submit details!");
    }
  }

}
