import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor( private http: HttpClient ) { }

  getCursos(){
    let url = `${environment.apiUrl}/cursos`;
    return this.http.get(url);
  }
}
