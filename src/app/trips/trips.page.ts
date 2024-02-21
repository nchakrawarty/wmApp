import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { TripService } from '../trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  tripList: any;
  vehicleTrackList: any;
  totalTrips: number = 0;
  tripsToday: number = 0;

  constructor(private tripService: TripService, private navCtrl: NavController) {
    this.getVehicleTracks();
    this.getVehicleTrackCount();
    this.getTrips();
    this.getTripCount();
  }

  ngOnInit() {
  }

  getVehicleTracks() {
    this.tripService.getVehicleTracks().then(data => {
      this.vehicleTrackList=data;
    });
  }

  getVehicleTrackCount() {
    this.tripService.getVehicleTrackCount().then(data => {
      let tripsToday: any = data;
      this.tripsToday = tripsToday.count;
    });
  }

  getTrips() {
    this.tripService.getTrips().then(data => {
      this.tripList=data;
    });
  }

  getTripCount() {
    this.tripService.getTripCount().then(data => {
      let totalTrips: any = data;
      this.totalTrips = totalTrips.count;
    });
  }

  addTrip() {
    this.navCtrl.navigateForward('trip-start');
  }

  endTrip(track: any) {
    this.navCtrl.navigateForward('trip-end', {state: track});
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
