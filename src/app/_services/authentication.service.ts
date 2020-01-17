import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {CookieService} from 'ng2-cookies';

import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService implements CanActivate{
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient, private router: Router, private cs: CookieService) {
    }

    canActivate(): boolean {
        if (!this.cs.get('access-token')) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
    }
}