import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Employees', url: '/folder/employees', icon: 'list' },
    { title: 'Recyclers', url: '/folder/recyclers', icon: 'repeat' },
    { title: 'Factory', url: '/folder/factory', icon: 'business' },
    { title: 'Logout', url: '/folder/logout', icon: 'power' }
  ];
  public username = "Default User";
  public email = "defaultuser@email.com";
  public center = "Default Center";
  constructor() {}
}
