/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Libro;

import Entity.Libro;

/**
 *
 * @author LAPC
 */
public interface LibroRepository {
    Libro crearLibro(Libro l);
    Libro editarLibro(Libro l);
    Libro obtenerLibros ();
    Libro obtenerLibroPorId(String Codigo);
    Libro eliminarLibro(Libro l);
}
