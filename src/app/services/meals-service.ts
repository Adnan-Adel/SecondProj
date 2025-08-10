import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MealsService {
  constructor(private httpClient: HttpClient) { }

  getMealsByCategory(category: string): Observable<any> {
    const url = `https://forkify-api.herokuapp.com/api/search?q=${category}`;
    return this.httpClient.get(url);
  }
}