import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-end',
  templateUrl: './trip-end.page.html',
  styleUrls: ['./trip-end.page.scss'],
})
export class TripEndPage implements OnInit {

  vehicleTrack: any;
  time: any = '';

  constructor( private location: Location, private tripService: TripService) { }

  ngOnInit() {
    this.vehicleTrack = this.location.getState();
    let d = new Date()
    this.time = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
  }

  endTrip() {
    let toast = document.getElementById('submit-status');
    //console.log(this.vehicleTrack);
    if(confirm("Are you sure you want to delete student from database?")) {
      this.tripService.deleteVehicleTrack(this.vehicleTrack.id);
      let trip = {
        'date': this.vehicleTrack['date'],
        'vehicle-number': this.vehicleTrack['vehicle-number'],
        'start-time': this.vehicleTrack['start-time'],
        'end-time': this.time,
        'driver-name': this.vehicleTrack['driver-name'],
        'line-employee-1': this.vehicleTrack['line-employee-1'],
        'line-employee-2': this.vehicleTrack['line-employee-2']
      }
      console.log(trip);
      this.tripService.addTrip(trip).then(data => {
        console.log(data);
      });
      toast?.setAttribute("message","Trip ended!");
      this.location.back();
    } else {
      toast?.setAttribute("message","Failed to submit details!");
    }
  }

}
