import { Component, OnInit } from '@angular/core';
import { LibroService } from './../servicios/api.service';
import { Libro } from './../modelos/libro'
@Component({
  selector: 'app-get-libros',
  templateUrl: './get-libros.component.html',
  styleUrls: ['./get-libros.component.css']
})
export class GetLibrosComponent implements OnInit {
  libro: Libro;
  constructor(private librosService:LibroService) { }

  ngOnInit(): void {
    
  }
  getLibros():void{
    this.librosService.getLibros();
  }
}