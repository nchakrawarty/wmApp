import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor() {}

  // Perform basic authentication logic here
  authenticate(username: string, password: string): boolean {
    // Example: Check if the username and password match some predefined values
    if (username === 'demouser@gmail.com' && password === 'demo1234') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true; // Authentication successful
    } else {
      return false; // Authentication failed
    }
  }

  // Check if the user is logged in
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Log out the user
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}
