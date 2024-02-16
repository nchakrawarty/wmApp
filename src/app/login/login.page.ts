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
    
      // Directly navigate to the home page without any authentication logic
      this.router.navigateByUrl('/home');
    }
}
