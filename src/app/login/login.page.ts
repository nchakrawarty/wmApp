import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(form: NgForm) {
    const formData = form.value;
    console.log('Login submitted:', formData);

    this.authService.login(formData.email, formData.password).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful:', response);
        // Redirect to dashboard or any other page
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
        // Display error message to the user
      }
    );
  }
}
