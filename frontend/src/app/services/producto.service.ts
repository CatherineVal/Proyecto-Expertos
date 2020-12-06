import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http:HttpClient ) { }

  url:String = 'http://localhost:3000/empresa';

  agregarProducto(idEmpresa, producto){
    return this.http.post(`${this.url}/${idEmpresa}/productos`, producto);
  }

  obtenerProductos(idEmpresa){
    return this.http.get(`${this.url}/${idEmpresa}/productos`);
  }

}
