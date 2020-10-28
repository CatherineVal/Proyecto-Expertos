import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { 

  }
  urlAppi: string = 'http://localhost:3000/empresa';

  obtenerempresas() {
    return this.http.get(this.urlAppi);
  }

  guardarEmpresa(empresa:any){
    return this.http.post(this.urlAppi, empresa);
    
  }

  obtenerEmpresa(idEmpresa:any){
    return this.http.get(`${this.urlAppi}/${idEmpresa}`); // tambien se puede concatener con +
    //return this.http.get(this.urlAppi + '/' + idCliente);
  }

}
