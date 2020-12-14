import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { 

  }
  urlAppi: string = 'https://proyectoexpertos.herokuapp.com/empresa';

  obtenerempresas() {
    return this.http.get(this.urlAppi);
  }

  guardarEmpresa(empresa:any){
    return this.http.post(this.urlAppi, empresa);
    
  }
  eliminarEmpresas(id:any){
    return this.http.delete(this.urlAppi + '/' + id);
    
  }

  obtenerEmpresa(idEmpresa:any){
    return this.http.get(`${this.urlAppi}/${idEmpresa}`); // tambien se puede concatener con +
    //return this.http.get(this.urlAppi + '/' + idCliente);
  }
  login(empresa){
    return this.http.post(`${this.urlAppi}/login`, empresa); // tambien se puede concatener con +
    //return this.http.get(this.urlAppi + '/' + idCliente);
  }

  agregarEmpresa(empresa){
    return this.http.post(this.urlAppi, empresa);
  }

}
