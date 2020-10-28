/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Libro;

import Entity.Identity;
import Entity.Libro;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author LAPC
 */
public interface GenericRepository<T extends Identity> {
    void crear(T entity);
    void editar(T entity);
    List<T> obtenerLista ();
    Optional<T> obtenerPorId(String Codigo);
    void eliminar(T entity);
}

