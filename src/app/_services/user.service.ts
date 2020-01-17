import { Injectable } from '@angular/core';
import {CookieService} from 'ng2-cookies';
import { Router } from '@angular/router'
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private cs: CookieService, private router: Router, private http: HttpClient) {  }

  login(creds: {username: string, password: string}){
    this.http.post(environment.apiUrl + '/users/login', creds, {
      'headers': new HttpHeaders({'Content-Type': 'application/json'})
    })
    .subscribe(data =>{
      this.cs.set('access-token', creds.username);
      this.router.navigate(['/home'])
    }, err => {
      console.error(err) 
      this.router.navigate['/login/error']
    })
  }
  register(user) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  } 
  checkIfLoggedIn() {
    if (!this.cs.get('access-token')){
      this.router.navigate(['/login'])
    }
  }

}
