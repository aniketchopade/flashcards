import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment } from '@environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ng2-cookies';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  header: HttpHeaders;
  constructor(private http: HttpClient, 
              private cs: CookieService
    ) { 
      this.header = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'User': this.cs.get('access-token')
      })
    }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.devUrl}/flashcard/categories`, {
      headers: this.header
    })
  }

}
