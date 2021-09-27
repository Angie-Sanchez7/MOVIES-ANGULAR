import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  url = '/api';
  constructor(private http: HttpClient) {}
  //get equipos
  getEquipos() {
    return this.http.get(this.url);
  }
}
