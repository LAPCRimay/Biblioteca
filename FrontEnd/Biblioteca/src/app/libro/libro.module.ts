import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroService } from './servicios/api.service';
import { FormsModule } from '@angular/forms'
import { GetLibrosComponent } from './get-libros/get-libros.component';

@NgModule({
  declarations: [GetLibrosComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    LibroService
  ]
})
export class LibroModule { }
