import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient) { }
  
  urlAppi: string = 'https://proyectoexpertos.herokuapp.com/empresa';
  
  obtenerCategorias() {
    return this.http.get(this.urlAppi);
  }

  agregarCategoria(idEmpresa, categoria){
    return this.http.post(this.urlAppi+'/categoria/'+idEmpresa , categoria);
    
  }
  eliminarCategoria(idEmpresa, idCategoria,){
    return this.http.delete(this.urlAppi + '/' + idEmpresa + '/categoria/' +  idCategoria);
    
  }
  guardarCategoria(cliente:any){
    return this.http.post(this.urlAppi, cliente);
    
  }

  obtenerCategoria(idCategoria:any){
    return this.http.get(`${this.urlAppi}/${idCategoria}`); 
  }
}
