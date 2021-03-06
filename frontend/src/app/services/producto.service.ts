import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  url: String = 'https://proyectoexpertos.herokuapp.com/empresa';

  agregarProducto(idEmpresa, producto) {
    return this.http.post(`${this.url}/${idEmpresa}/productos`, producto);
  }

  obtenerProductos(idEmpresa) {
    return this.http.get(`${this.url}/${idEmpresa}/productos`);
  }

  eliminarProducto(idEmpresa, idProducto) {
    return this.http.delete(`${this.url}/${idEmpresa}/productos/eliminar/${idProducto}`);

  }

}
