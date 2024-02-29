import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { TripService } from '../trip.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  userID: any;
  mainList: any;
  pastTrips: any = [];
  currentTrips: any = [];
  totalTrips: number = 0;
  tripsToday: number = 0;
  newCenterId: any = ['65dc23c50b3aeb76fd38dc07'];

  constructor(private tripService: TripService, private navCtrl: NavController) {
    const data = localStorage.getItem('userData');
    if (data !== null) {
      const userData = JSON.parse(data);
      this.userID = userData.id;
      this.newCenterId = userData.newCenterId;
    }
    this.getTripList();
  }

  ngOnInit() {
  }

  getTripList() {
    this.tripService.getVehicleTracks()
    .then(response => {
      this.mainList = response;
      console.log((this.mainList));
      for(let val in this.mainList) {
        if(this.mainList[val].status === "active") {
          this.currentTrips.push(this.mainList[val]);
          this.tripsToday++;
        } else {
          this.pastTrips.push(this.mainList[val]);
          this.totalTrips++;
        }
      }
    })
    .catch(err => console.log(err));
  }

  addTrip() {
    this.navCtrl.navigateForward('trip-start', {state: this.newCenterId});
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
