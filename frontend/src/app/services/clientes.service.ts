import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {

  }

  urlAppi: string = 'https://proyectoexpertos.herokuapp.com/cliente';

  obtenerclientes() {
    return this.http.get(this.urlAppi);
  }

  guardarCliente(cliente:any){
    return this.http.post(this.urlAppi, cliente);
    
  }

  eliminarCliente(id:any){
    return this.http.delete(this.urlAppi + '/' + id);
    
  }

  obtenerCliente(idCliente:any){
    return this.http.get(`${this.urlAppi}/${idCliente}`); // tambien se puede concatener con +
    //return this.http.get(this.urlAppi + '/' + idCliente);
  }

  login(cliente){
    return this.http.post(`${this.urlAppi}/login`, cliente); 
  }

  agregarcliente(cliente){
    return this.http.post(this.urlAppi, cliente);
  }

  agregarProductos(producto, idCliente){
    return this.http.post(this.urlAppi+'/'+idCliente +'/compras', producto);
  }

  eliminarProductos(id, idCliente){
    return this.http.delete(this.urlAppi+'/'+idCliente +'/compras/eliminar/' + id);
  }
}
