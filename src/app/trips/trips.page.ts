import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TripService } from '../trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  tripList: any;
  vehicleTrackList: any;

  constructor(private router: Router, private tripService: TripService) {
    this.getVehicleTrack();
    this.getTrips();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    
  }

  getVehicleTrack() {
    this.tripService.getVehicleTrack().then(data => {
      this.vehicleTrackList=data;
    });
  }

  getTrips() {
    this.tripService.getTrips().then(data => {
      this.tripList=data;
    });
  }

  addTrip() {
    this.router.navigate(['trip-start']);
  }

  endTrip(id_trip_div: string) {
    this.router.navigate(['trip-end']);
    //document.getElementById(id_trip_div)?.setAttribute("hidden","true");
    //document.getElementById("trips-for-the-day-heading")?.setAttribute("hidden","true");
  }

  expand(id_item: string, id_expand: string, id_icon: string) {
    console.log(id_item);
    var item = document.getElementById(id_item);
    var expand = document.getElementById(id_expand);
    var icon = document.getElementById(id_icon);
    if(item?.getAttribute("lines") === "none") {
      item?.setAttribute("lines","inset");
    } else {
      item?.setAttribute("lines","none");
    }
    if(expand?.hasAttribute("hidden")) {
      expand?.removeAttribute("hidden");
    } else {
      expand?.setAttribute("hidden","true");
    }
    if(icon?.getAttribute("name") === "chevron-down-outline") {
      icon?.setAttribute("name","chevron-up-outline");
    } else {
      icon?.setAttribute("name","chevron-down-outline");
    }
  }
}
