import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    
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
    let item = document.getElementById(id_item);
    let expand = document.getElementById(id_expand);
    let icon = document.getElementById(id_icon);
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
