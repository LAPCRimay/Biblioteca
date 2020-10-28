import { RouterModule, Routes } from '@angular/router';
import { GetLibrosComponent } from './Libro/get-libros/get-libros.component';

const appRoutes = [
    { path: 'libros', component: GetLibrosComponent,  pathMatch: 'full'}
  ];

  export const routing = RouterModule.forRoot(appRoutes);