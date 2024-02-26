import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  apiBaseUrl:string='';

  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'http://15.207.84.40:4200/api/';
  }

  getVehicleTrack(id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'vehicletracks/' + id).subscribe(data => {
        resolve(data);
      })
    });
  }

  getVehicleTracks() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'vehicletracks/').subscribe(data => {
        resolve(data);
      })
    });
  }

  getVehicleTrackCount() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'vehicletracks/count').subscribe(data => {
        resolve(data);
      })
    });
  }

  addVehicleTrack(track: any) {
    return new Promise(resolve => {
      this.http.post(this.apiBaseUrl+'vehicletracks/', track).subscribe(data => {
        resolve(data);
      })
    });
  }

  updateVehicleTrack(track: any) {
    return new Promise(resolve => {
      this.http.put(this.apiBaseUrl+'vehicletracks/', track).subscribe(data => {
        resolve(data);
      })
    });
  }

  deleteVehicleTrack(id: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiBaseUrl+'vehicletracks/'+id).subscribe(data => {
        resolve(data);
      })
    });
  }
  
}