import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {
   }
   urlAppi: string = 'http://localhost:3000/roles';

   obtenerRoles() {
    return this.http.get(this.urlAppi);
  }

  guardarRole(role:any){
    return this.http.post(this.urlAppi, role);
    
  }

  obtenerRole(idRole:any){
    return this.http.get(`${this.urlAppi}/${idRole}`); // tambien se puede concatener con +
    //return this.http.get(this.urlAppi + '/' + idCliente);
  }

}
