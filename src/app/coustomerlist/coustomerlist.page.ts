import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coustomerlist',
  templateUrl: './coustomerlist.page.html',
  styleUrls: ['./coustomerlist.page.scss'],
})
export class CoustomerlistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToQRScan(username: string, phone: string) {
    this.router.navigate(['/qrscan'], { queryParams: { username, phone } });
  }
  

}
