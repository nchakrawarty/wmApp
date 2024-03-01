import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recyclable',
  templateUrl: './recyclable.component.html',
  styleUrls: ['./recyclable.component.scss'],
})
export class RecyclableComponent implements OnInit {
  recyclableItems: any[] = [];
  
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Make an HTTP GET request to fetch recyclable items data from JSON
    this.http.get<any[]>('assets/data/data.json').subscribe(data => {
      // Filter the data to get only recyclable items
      this.recyclableItems = data.filter(item => item.type === 'recyclable');
    });
  }
  redirectToDetailPage(item: any) {
    // Redirect to detail page passing item data
    this.router.navigate(['/items-inside']);
  }
}