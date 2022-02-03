import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${environment.apiUrl}/pizzas`);
  }
}
