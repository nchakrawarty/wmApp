import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-end',
  templateUrl: './trip-end.page.html',
  styleUrls: ['./trip-end.page.scss'],
})
export class TripEndPage implements OnInit {

  time: any = '';

  constructor(private router: Router) { }

  ngOnInit() {
    let d = new Date()
    this.time = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
  }

  endTrip() {
    this.router.navigate(['trips']);
  }

}
