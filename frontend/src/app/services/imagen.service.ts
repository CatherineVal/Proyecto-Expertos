import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) { }
  urlAppi: string = 'https://proyectoexpertos.herokuapp.com/empresa';
  url: string = 'https://api.cloudinary.com/v1_1/dsxagbugw/image/upload';
  subirImagen(imagen) {
    return this.http.post('https://api.cloudinary.com/v1_1/dsxagbugw/image/upload', imagen);
  }

  subirImagenNode(imagen, idEmpresa) {
    return this.http.post('https://proyectoexpertos.herokuapp.com/empresa/image/'+idEmpresa , imagen);
  }

  eliminarImg(idEmpresa, idImagen){
    return this.http.delete(`${this.urlAppi}/${idEmpresa}/imagen/${idImagen}`)
  
  }

}
