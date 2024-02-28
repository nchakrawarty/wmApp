import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Urls } from './constants/urls';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  
  constructor(private http: HttpClient, private router: Router) {
    // Check if the user is already logged in (e.g., from a previous session)
    const Value=localStorage.getItem('isLoggedIn')
    if (Value !== null){
      if(JSON.parse(Value)){
        this.router.navigateByUrl('/home');
      }
    }else{
      localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
    }
  }

  // Perform basic authentication logic here
authenticate(email: string, password: string): Observable<any> {
  // Make an HTTP post request to the backend API endpoint to retrieve accesstoken
  return this.http.post<any>(`${Urls.LOGIN}`, { email, password, returnSecureToken: true }).pipe(
    tap(response => {
      // Check if a user with the provided email exists
      if (response && response.id) {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn))
        //localStorage.setItem('accessToken', response.id);

        // getUserData 
        return this.http.get(`${Urls.USERS}/${response.userId}?access_token=${response.id}`).pipe(
          tap(userData => {
            localStorage.setItem('userData', JSON.stringify(userData));
            console.log(userData);
          }),
          catchError(error => {
            console.error('Failed to fetch user data:', error);
            return of(false); // Return false to indicate authentication failure
          })
        ).subscribe();
      } else {
        // auth failed or no accesstoken
        this.isLoggedIn = false;
        localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
        return of(false);
      }
    }),
    catchError((error) => {
      // Handle any errors 
      console.error('Authentication error:', error);
      this.isLoggedIn = false;
      localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
      return of(false); // Return false to indicate authentication failure
    })
  );
}


  // Check if the user is logged in
  isAuthenticated(): boolean {
    const Value=localStorage.getItem('isLoggedIn');
    if (Value !== null){
      this.isLoggedIn=JSON.parse(Value);
    }
    return this.isLoggedIn;
  }

  // Log out the user
  logout(): Observable<any> {
    //const accessToken = localStorage.getItem('accessToken')
    // Make a request to the logout endpoint
    console.log('logout initiated')
    /*return this.http.post<any>(`${Urls.LOGOUT}?access_token=${accessToken}`,{}).pipe(
      tap(() => {*/
        // On successful logout, reset isLoggedIn and clear local storage
        this.isLoggedIn = false;
        console.log("logged out")
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        // Redirect to login page after logout
        this.router.navigateByUrl('/login');
        return of(true);
      }//),
      /*catchError(error => {
      console.error('Logout error:', error);
      return of(false); // Return false to indicate logout failure
      })
    );
  }*/
}
