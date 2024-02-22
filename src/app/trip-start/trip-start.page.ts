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
  driver: string = '';
  lineEmp1: string = '';
  lineEmp2: string = '';

  constructor(private location: Location, private tripService: TripService) { }

  ngOnInit() {
    let d = new Date()
    this.time = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
    this.date = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, '0') + "-" + String(d.getDate()).padStart(2, '0');
  }

  startTrip() {
    let vehicleTrack = {
      'date': this.date,
      'vehicle-number': this.vehicleNum,
      'start-time': this.time,
      'end-time': '',
      'driver-name': this.driver,
      'line-employee-1': this.lineEmp1,
      'line-employee-2': this.lineEmp2
    }
    let toast = document.getElementById('submit-status');
    if(this.date!='' && this.vehicleNum!='' && this.time!='' && this.driver!='' && this.lineEmp1!='' && this.lineEmp2!='') {
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
