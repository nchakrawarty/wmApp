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
    // Perform authentication logic here
    if (this.authService.authenticate()) {
      // Authentication successful, navigate to home page
      this.router.navigateByUrl('/home');
    } else {
      // Authentication failed, display error message
      console.log('Authentication failed');
      // display error message to the user using toast
    }
  }
}
