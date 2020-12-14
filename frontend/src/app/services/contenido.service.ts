import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(private http: HttpClient) { }


  urlAppi: string = 'https://proyectoexpertos.herokuapp.com/contenido';

  obtenerContenido(idEmpresa, idPagina) {
    return this.http.get(this.urlAppi + '/'+ idEmpresa + '/contenido/' + idPagina); 
  }

  guardarContenido(contenido: any) {
    return this.http.post(this.urlAppi, contenido);

  }

  actualizarContenido(idContendio, contenido) {
    return this.http.put(`${this.urlAppi}/${idContendio}`, contenido);
  }


}