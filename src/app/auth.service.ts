import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Urls } from './constants/urls';
// const MINUTES_UNITL_AUTO_LOGOUT = 60 // in mins
// const CHECK_INTERVAL = 15000 // in ms
// const STORE_KEY =  'lastAction';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  oldCv: any;
  regdata: any;
  constructor(private http: HttpClient, private router: Router) {

    // this.check();
    // this.initListener();
    // this.initInterval();
    // localStorage.setItem(STORE_KEY,Date.now().toString());
   }

  login(email: string, password: string) {
    // console.log(email, password)
    return this.http.post<any>(`${Urls.LOGIN}`, { email, password, returnSecureToken: true })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.http.get(`${Urls.USERS}/${user.userId}?access_token=${user.id}`).subscribe(res => {
          let data: any = res;
          console.log(res);
          localStorage.setItem("userName", data.username);
        });
        // console.log(user);
        // login successful if there's a jwt token in the response
        if (user && user.id) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        this.router.navigate(['/folder/dashboard']);
        // this.router.navigate(['/tabs/customerlist']);
        return user;
      }));
  }

//   public getLastAction() {
//     return parseInt(localStorage.getItem(STORE_KEY));
//   }
//  public setLastAction(lastAction: number) {
//     localStorage.setItem(STORE_KEY, lastAction.toString());
//   }


//   initListener() {
//     document.body.addEventListener('click', () => this.reset());
//     document.body.addEventListener('mouseover',()=> this.reset());
//     document.body.addEventListener('mouseout',() => this.reset());
//     document.body.addEventListener('keydown',() => this.reset());
//     document.body.addEventListener('keyup',() => this.reset());
//     document.body.addEventListener('keypress',() => this.reset());
//   }

//   reset() {
//     this.setLastAction(Date.now());
//   }

//   initInterval() {
//     setInterval(() => {
//       this.check();
//     }, CHECK_INTERVAL);
//   }

//   check() {
//     const now = Date.now();
//     const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
//     const diff = timeleft - now;
//     const isTimeout = diff < 0;

//     if (isTimeout)  {
//       localStorage.clear();
//       this.router.navigate(['./login']);
//     }
//   }

  logout(u) {

    this.http.post<any>(`${Urls.LOGOUT}?access_token=${u.id}`, { "accessToken": u.id }).subscribe((res: any) => {
      console.log(res);
      console.log("Logged out");
    })
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
  regus:any
  regdat:any
  register(email: string, password: string, age: number, gender: string, username: string, usernamekan: string, mobile: number, bloodgroup: string, centers: any, role: string) {
    console.log(email, role, password, age, gender, username, usernamekan, bloodgroup, mobile);
    let centerId = '';

    if (role === 'admin') {
      centerId = localStorage.getItem('selectedCenterId');
    }
    else {
      centerId = centers[0];
    }

    console.log(centerId);

    // eslint-disable-next-line max-len, object-shorthand
    return this.http.post<any>(`${Urls.USERS}`, { email: email, mobile: mobile, boloodgroup: bloodgroup, password: password, age: age, gender: gender, username: username, usernamekan: usernamekan, centers: centers, role: role, emailverified: true })
      .pipe(map(user => {
        const userName = {
          name: user.username,
          kannadaname: user.usernamekan,
          id: user.id,
        };

        this.http.post<any>(`${Urls.ALLS}`, {
          email: user.email,
          mobile: user.mobile,
          boloodgroup: user.bloodgroup,
          userid: user.id,
          age: user.age,
          gender: user.gender,
          username: user.username,
          usernamekan: user.usernamekan,
          centers: user.centers,
          role: user.role,
          centerId
        }).pipe(map(users => {
          console.log(users);
          this.regus = users;
          // eslint-disable-next-line @typescript-eslint/prefer-for-of
          for (let c = 0; c < user.centers.length; c++) {
            this.http.get(`${Urls.CEN}/${user.centers[c]}`).subscribe(res => {
              this.oldCv = res;
              // eslint-disable-next-line @typescript-eslint/dot-notation
              userName['allId'] = users.id;
              // eslint-disable-next-line @typescript-eslint/quotes
              console.log("REG USER" + this.regus, " REG DATA " + this.regdat);
              this.oldCv.userName.push(userName);
              delete this.oldCv.id;
              // eslint-disable-next-line @typescript-eslint/no-shadow
              this.http.patch(`${Urls.CENTER}/${user.centers[c]}`, this.oldCv).subscribe(res => {
                console.log('user inserted into center', res);
                this.router.navigate(['/login']);
              });
            });
          }
        })).subscribe(datas => {
          this.regdat = datas;
          console.log(datas);
        });
      }));
  }
}

