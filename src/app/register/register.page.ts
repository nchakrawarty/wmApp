import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../constants/urls';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = "";
  phone: string = "";
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastController: ToastController
  ) {}


  async Register() {

    const userData = {
      username: this.username,
      phone: this.phone,
      email: this.email,
      password: this.password
    };

    try {
      // Send a POST request to the backend API endpoint for user registration
      const response = await this.http.post(`${Urls.USERS}`, userData).toPromise();
      console.log("Registration successful:", response);
      this.presentToast('Registration successful', true);
      // Redirect to login page
      this.router.navigateByUrl('/login');
    } catch(error: any) {
        // Handle registration error
      console.error("Registration failed:", error);
      // Show error message
      this.errorMessage=error.message || 'Registration failed. Please try again.';
      this.presentToast(this.errorMessage, false);
    }
  }
  async presentToast(message: string, success: boolean) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000, // Display toast for 2 seconds
      position: 'top',
      color: success ? 'success' : 'danger' // Position toast at the top of the screen
    });
    toast.present();
  }
}
  
