import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  apiBaseUrl:string='';

  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'http://127.0.0.1:3000/api/';
  }

  getTrips() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'trips/').subscribe(data => {
        resolve(data);
      })
    });
  }

  getVehicleTrack() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'vehicleTracks/').subscribe(data => {
        resolve(data);
      })
    });
  }
}