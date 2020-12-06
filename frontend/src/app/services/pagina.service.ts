import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(private http: HttpClient) { }

  urlAppi: string = 'localhost:3000/empresa/';
  //:idEmpresa/pagina/eliminar/:idPagina
 
  eliminarPagina(idEmpresa, idPagina, pagina){
    return this.http.delete(`${this.urlAppi}/${idEmpresa}/pagina/eliminar/${idPagina}`);
    
  }
  guardarPagina(pagina:any, idEmpresa){
    return this.http.post(`${this.urlAppi}/${idEmpresa}/paginas`, pagina );
    //'/:idEmpresa/paginas'
  }

 


}
