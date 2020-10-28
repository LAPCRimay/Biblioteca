import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Libro } from '../modelos/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private libro: Libro = { Codigo: "", Nombre: "", Descripcion: "", Autor: "",Fecha: new Date(),
        NumEjemplares: 1, Costo: 12 };
  private BibliotecaUrl = "http://localhost:8080/Biblioteca/test-resbeans.html"; // URL to web api

  constructor(private http: HttpClient) {}

  public getLibros(): Observable<Libro> {
    return this.http.get<Libro>(this.BibliotecaUrl);
  }
}
