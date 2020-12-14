import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {

   }
   urlAppi: string = 'https://proyectoexpertos.herokuapp.com/admin';

  obtenerusuarios() {
    return this.http.get(this.urlAppi);
  }

  guardarUsuarios(usuario:any){
    return this.http.post(this.urlAppi, usuario);
    
  }

  eliminarUsuarios(id:any){
    return this.http.delete(this.urlAppi + '/'+id);
  }

  obtenerUsuarios(idUsuario:any){
    return this.http.get(`${this.urlAppi}/${idUsuario}`); 
  }

  login(admin){
    return this.http.post(`${this.urlAppi}/login`, admin); 
  }
}
