import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-start',
  templateUrl: './trip-start.page.html',
  styleUrls: ['./trip-start.page.scss'],
})
export class TripStartPage implements OnInit {

  time: any = '';
  date: any = '';

  constructor(private router: Router) { }

  ngOnInit() {
    let d = new Date()
    this.time = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
    this.date = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, '0') + "-" + String(d.getDate()).padStart(2, '0');
    console.log(this.date);
  }

  startTrip() {
    this.router.navigate(['trips']);
  }

}
