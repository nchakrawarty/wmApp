import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-recyclable',
  templateUrl: './non-recyclable.component.html',
  styleUrls: ['./non-recyclable.component.scss'],
})
export class NonRecyclableComponent implements OnInit {
  nonRecyclableItems: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Assuming data.json is located in the assets folder
    this.http.get<any[]>('assets/data/data.json').subscribe(data => {
      // Filter non-recyclable items
      this.nonRecyclableItems = data.filter(item => item.type === 'non-recyclable');
    });
  }

  redirectToDetailPage(item: any) {
    // Redirect to detail page passing item data
    this.router.navigate(['/items-inside']);
  }
}