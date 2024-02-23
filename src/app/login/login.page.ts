import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string="";
  password: string="";
  isLoading: boolean = false;
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router,/* private appComponent: AppComponent*/) {}

  login() {
    this.isLoading = true;
    this.authService.authenticate(this.email, this.password).subscribe(success => {
      this.isLoading = false;
      if (success) {
        this.router.navigateByUrl('/home');
      } else {
        // Authentication failed
        this.errorMessage = "Email or password is incorrect.";
      }
    });
  }
}