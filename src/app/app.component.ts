import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NavigationEnd, Router } from '@angular/router';

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

  public username = "default";
  public email = "default";
  public center = "default";
  constructor(private authService: AuthService, private router: Router) {
    const data = localStorage.getItem('userData');
    if (data !== null) {
      const userData = JSON.parse(data);
      this.username = userData.username;
      this.email = userData.email;
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Store the current URL in localStorage
        localStorage.setItem('previousUrl', event.urlAfterRedirects);
      }
    });

    // Handle page refresh
    window.addEventListener('beforeunload', () => {
      // Store the current URL in localStorage
      localStorage.setItem('previousUrl', this.router.url);
    });

    // Navigate to the previous URL if available
    const previousUrl = localStorage.getItem('previousUrl');
    if (previousUrl && previousUrl !== '/login') {
      this.router.navigateByUrl(previousUrl);
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
        { title: 'ಲಾಗ್ ಔಟ್', action: 'logout' , icon: 'power' }
      ];
    } else {
      this.language = "en";
      this.appPages = [
        { title: 'Home', url: 'home', icon: 'home' },
        { title: 'Employees', url: '/folder/employees', icon: 'list' },
        { title: 'Recyclers', url: '/folder/recyclers', icon: 'repeat' },
        { title: 'Factory', url: '/folder/factory', icon: 'business' },
        { title: 'Logout', action: 'logout' , icon: 'power' }
      ];
    }
    
  }

  handleNavigation(action: string) {
    if (action === 'logout') {
        this.authService.logout();
      }
    }
  }