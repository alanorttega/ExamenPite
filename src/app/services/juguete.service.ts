import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juguete } from '../interfaces/Juguete';

@Injectable({
  providedIn: 'root'
})
export class JugueteService {
  private AppURL = 'https://localhost:44397/';
  private ApiURL = 'api/Juguete/'

  constructor(private http: HttpClient) { }

  getListaJuguetes(): Observable<any>{
    return this.http.get(this.AppURL + this.ApiURL);
  }

  guardarJuguete(Juguete: Juguete): Observable<any> {
    return this.http.post(this.AppURL + this.ApiURL, Juguete);
  }

  EliminarJuguete(id: number): Observable<any>{
    return this.http.delete(this.AppURL + this.ApiURL + id);
  }

  getJuguete(id: number): Observable<any>{
    return this.http.get(this.AppURL + this.ApiURL + id);
  }

  ActualizarJuguete(id: number, Juguete: Juguete): Observable<any>{
    return this.http.put(this.AppURL + this.ApiURL + id, Juguete);
  }
}
