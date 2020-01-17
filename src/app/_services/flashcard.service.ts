import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { CookieService } from 'ng2-cookies';
import { Flashcard } from '../models'
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  header: HttpHeaders;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cs: CookieService,
  ) { 
    this.header = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'User': this.cs.get('access-token')
    })
  }

  getFlashcards(): Observable<any> {
    return this.http.get(`${environment.devUrl}/flashcard/`, { 
      headers: this.header
    })
  }
  getFlashcard(id: number): Observable<any> {
    return this.http.get(`${environment.devUrl}/flashcard/${id}`, {
      headers: this.header
    })
  }
  getFlashcardsByCategory(category: string): Observable<any> {
    return this.http.get(`${environment.devUrl}/flashcard/category/${category}`, {
      headers: this.header
    })
  }
  update(flashcard: Flashcard): Observable<any> {
    flashcard.userid = this.cs.get('access-token')
    flashcard.status = "started"
    return this.http.post(`${environment.devUrl}/flashcard/create`, flashcard, {
      headers: this.header
    })
  }
}

//{'headers': new HttpHeaders({'Content-Type': 'application/json'})