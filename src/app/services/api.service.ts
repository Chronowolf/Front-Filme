import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../models/Filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string="http://localhost:8080";
  constructor(private http:HttpClient) { }


buscarFilmes():Observable<Filme[]>{
  return this.http.get<Filme[]>(`${this.baseUrl}/catalogo`)
}
}
