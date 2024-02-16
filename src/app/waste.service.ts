import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const currentDate = new Date().toISOString();

// Import or define the WasteItem interface
interface WasteItem {
  newCenterid: number;
  name: string;
  amount: number;
  date: string; // Date property in ISO 8601 format
}

@Injectable({
  providedIn: 'root'
})
export class WasteService {

  constructor(private http: HttpClient) { }

  postWastes(wasteItems: WasteItem[]): Observable<any> {
    const url = 'http://15.207.84.40:4200/api/newWasteCollecteds?access_token=kg';
    return this.http.post<any>(url, wasteItems);
  }
}
