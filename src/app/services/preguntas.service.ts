import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http: HttpClient) { }

  getPreguntas(): Observable<any>{
    return this.http.get("../../assets/database.json");
  }
}
