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

  getTrip(id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'trips/' + id).subscribe(data => {
        resolve(data);
      })
    });
  }

  getTrips() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'trips/').subscribe(data => {
        resolve(data);
      })
    });
  }

  addTrip(trip: any) {
    return new Promise(resolve => {
      this.http.post(this.apiBaseUrl+'trips/', trip).subscribe(data => {
        resolve(data);
      })
    });
  }

  updateTrip(id: any, trip: any) {
    return new Promise(resolve => {
      this.http.put(this.apiBaseUrl+'trips/'+id, trip).subscribe(data => {
        resolve(data);
      })
    });
  }

  deleteTrip(id: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiBaseUrl+'trips/'+id).subscribe(data => {
        resolve(data);
      })
    });
  }

  getVehicleTrack(id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'vehicleTracks/' + id).subscribe(data => {
        resolve(data);
      })
    });
  }

  getVehicleTracks() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'vehicleTracks/').subscribe(data => {
        resolve(data);
      })
    });
  }

  addVehicleTrack(track: any) {
    return new Promise(resolve => {
      this.http.post(this.apiBaseUrl+'vehicleTracks/', track).subscribe(data => {
        resolve(data);
      })
    });
  }

  updateVehicleTrack(id: any, track: any) {
    return new Promise(resolve => {
      this.http.put(this.apiBaseUrl+'vehicleTracks/'+id, track).subscribe(data => {
        resolve(data);
      })
    });
  }

  deleteVehicleTrack(id: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiBaseUrl+'vehicleTracks/'+id).subscribe(data => {
        resolve(data);
      })
    });
  }
  
}