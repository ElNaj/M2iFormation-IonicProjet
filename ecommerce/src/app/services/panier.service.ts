import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Panier } from '../models/panier.entity';
import { Pizza } from '../models/pizza.entity';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Panier[]>{
    return this.http.get<Panier[]>(`${environment.apiUrl}/paniers`);
  }

  findById(id: number): Observable<Panier> {
    return this.http.get<Panier>(`${environment.apiUrl}/paniers/${id}`);
  }

  create(panier: Panier): Observable<Panier>{
    return this.http.post<Panier>(`${environment.apiUrl}/paniers`, panier);
  }
  update(id: number, panier: Panier): Observable<Panier> {
    return this.http.put<Panier>(`${environment.apiUrl}/paniers/${id}`, panier);
  }
}
