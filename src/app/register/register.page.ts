import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = "";
  phone: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router) {}

  register() {
    // Implement registration logic here
    // For example, send registration request to backend
    // After successful registration, navigate to login page
    this.router.navigateByUrl('/login');
  }
}
