import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getLatestNews(): Observable<any> {
    const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=AeNmrvSZusBzyeuIk1nr1NljwVDVyOAT`;
    return this.http.get(apiUrl);
  }
}
