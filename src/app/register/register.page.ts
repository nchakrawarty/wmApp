import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router) {}

  register() {
    // Perform registration logic here
    console.log('Registering user...');
    // You can implement registration logic, e.g., calling a service to register the user
    // After successful registration, you can navigate to a different page, such as the home page
    this.router.navigateByUrl('/home');
  }
}
