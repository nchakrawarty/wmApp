import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public language = "en";
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Employees', url: '/folder/employees', icon: 'list' },
    { title: 'Recyclers', url: '/folder/recyclers', icon: 'repeat' },
    { title: 'Factory', url: '/folder/factory', icon: 'business' },
    { title: 'Logout', action: 'logout' , icon: 'power' }
  ];

  public username = "";
  public email = "";
  public center = "";
  constructor(private authService: AuthService) {
    const data = localStorage.getItem('userData');
    if (data !== null) {
      const userData = JSON.parse(data);
      this.username = userData.username;
      this.email = userData.email;
    }
  }

  


  public switchLanguage() {
    if(this.language == "en") {
      this.language = "kan";
      this.appPages = [
        { title: 'ಮನೆ', url: 'home', icon: 'home' },
        { title: 'ಉದ್ಯೋಗಿಗಳು', url: '/folder/employees', icon: 'list' },
        { title: 'ಮರುಬಳಕೆಗಾರರು', url: '/folder/recyclers', icon: 'repeat' },
        { title: 'ಕಾರ್ಖಾನೆ', url: '/folder/factory', icon: 'business' },
        { title: 'ಲಾಗ್ ಔಟ್', url: '/folder/logout', icon: 'power' }
      ];
    } else {
      this.language = "en";
      this.appPages = [
        { title: 'Home', url: 'home', icon: 'home' },
        { title: 'Employees', url: '/folder/employees', icon: 'list' },
        { title: 'Recyclers', url: '/folder/recyclers', icon: 'repeat' },
        { title: 'Factory', url: '/folder/factory', icon: 'business' },
        { title: 'Logout', url: '/folder/logout', icon: 'power' }
      ];
    }
    
  }


  handleNavigation(action: string) {
    if (action === 'logout') {
        this.authService.logout();
      }
    }
  }


