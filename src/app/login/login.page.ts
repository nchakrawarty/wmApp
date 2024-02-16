import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string="";
  password: string="";

  constructor(private authService: AuthService, private router: Router) {}

  login() {
     // Call the authentication method from AuthService
     if (this.authService.authenticate(this.username, this.password)) {
      // If authentication is successful, navigate to the home page
      this.router.navigateByUrl('/home');
    } else {
      // If authentication fails, you can handle it here (e.g., show an error message)
      console.log('Authentication failed');
    }
  }
}