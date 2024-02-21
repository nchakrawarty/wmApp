import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  
  constructor(private http: HttpClient) {
    // Check if the user is already logged in (e.g., from a previous session)
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  // Perform basic authentication logic here
  authenticate(email: string, password: string): Observable<any> {
     // Make an HTTP post request to the backend API endpoint to retrieve accesstoken
    return this.http.post<any>(`${environment.apiUrl}/Users/login`,{ email, password }).pipe(
    map(response => {
      // Check if a user with the provided email exists
      if (response && response.id) {
        localStorage.setItem('accessToken', response.id);
        this.isLoggedIn = true;

        return this.getUserData(response.id,response.userId).pipe(
          map(userData =>{
            localStorage.setItem('userData', JSON.stringify(userData));
            return true;
          })
        );
        } else {
          // auth failed or no accesstoken
          return false;
        }
    }),
    catchError((error) => {
      // Handle any errors 
      console.error('Authentication error:', error);
      return [false]; // Return false to indicate authentication failure
    })
  );
}

// Example: Get user profile data
private getUserData(accessToken: string,userId: string): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/Users/${userId}?accessToken=${accessToken}`).pipe(
    catchError(error => {
      console.error('Failed to fetch user data:', error);
      throw error;
    })
  );
}


  // Check if the user is logged in
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Log out the user
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData')
  }
}
