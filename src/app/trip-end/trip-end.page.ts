import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-end',
  templateUrl: './trip-end.page.html',
  styleUrls: ['./trip-end.page.scss'],
})
export class TripEndPage implements OnInit {

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Failed to submit details!');
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: () => {
        console.log('Trip ended!');
      },
    },
  ];

  trip: any;
  time: any = '';

  constructor( private location: Location, private tripService: TripService) { }

  ngOnInit() {
    this.trip = this.location.getState();
    let d = new Date()
    this.time = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
  }

  setResult() {
    console.log();
  }

  endTrip(ev: any) {
    let toast = document.getElementById('submit-status');
    if(ev.detail.role == 'confirm') {
      this.tripService.deleteVehicleTrack(this.trip.id);
      let updateTrip = {
        'date': this.trip.date,
        'vehicleNum': this.trip.vehicleNum,
        'startTime': this.trip.startTime,
        'endTime': this.time,
        'status': 'ended',
        'driverName': this.trip.driverName,
        'lineEmp1': this.trip.lineEmp1,
        'lineEmp2': this.trip.lineEmp2,
        'newCenterId': this.trip.newCenterId
      }
      console.log(updateTrip);
      this.tripService.updateVehicleTrack(updateTrip).then(data => { console.log(data); });
      toast?.setAttribute("message","Trip ended!");
    } else {
      toast?.setAttribute("message","Failed to submit details!");
    }
    this.location.back();
  }
}
