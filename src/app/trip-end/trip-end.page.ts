import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-end',
  templateUrl: './trip-end.page.html',
  styleUrls: ['./trip-end.page.scss'],
})
export class TripEndPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  endTrip() {
    this.router.navigate(['trips']);
  }

}
