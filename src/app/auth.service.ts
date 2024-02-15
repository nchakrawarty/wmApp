import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/accounts';
  constructor(private http: HttpClient) {}

  // Method for handling login
  login(username: string, password: string): Observable<boolean> {
    // Assuming you have an API endpoint for user authentication
    return this.http.post<any>(`${this.apiUrl}`, { username, password }).pipe(
      catchError((error: any) => {
        // Handle error (e.g., log, display error message)
        console.error('Login error:', error);
        // Return false to indicate login failure
        return of(false);
      })
    );
  }

  // Method to check if user is logged in
  isAuthenticated(): boolean {
    // Check if user is logged in based on session or token
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Method to log out user
  logout(): void {
    // Clear user session or authentication token
    localStorage.removeItem('isLoggedIn');
  }
}