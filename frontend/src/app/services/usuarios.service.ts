import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {

   }
   urlAppi: string = 'http://localhost:3000/admin';

  obtenerusuarios() {
    return this.http.get(this.urlAppi);
  }

  guardarUsuarios(usuario:any){
    return this.http.post(this.urlAppi, usuario);
    
  }

  obtenerUsuarios(idUsuario:any){
    return this.http.get(`${this.urlAppi}/${idUsuario}`); // tambien se puede concatener con +
    //return this.http.get(this.urlAppi + '/' + idCliente);
  }


}
