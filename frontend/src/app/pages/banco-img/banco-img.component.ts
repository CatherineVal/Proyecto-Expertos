import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-banco-img',
  templateUrl: './banco-img.component.html',
  styleUrls: ['./banco-img.component.css']
})
export class BancoImgComponent implements OnInit {
  urlImg: string;
  idEmpresa: any;
  imagenes:any;

  constructor(private serviceImagen: ImagenService, private serviceEmpresa: EmpresasService) { }

  ngOnInit(): void {

    //window.localStorage.setItem('idEmpresa', '5f99a69f4384ae4168c36438')

    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));

    this.obtenerImagenes();
  }

  subirImagen(e) {
    let imagen = e.target.files[0];
    console.log(imagen);
    const formData = new FormData();
    formData.append('upload_preset', 'bancoImg');
    formData.append('file', imagen);

    this.serviceImagen.subirImagen(formData).subscribe((data: any) => {
      this.urlImg = data.url;
      console.log(data);
      this.agregarImagenNode();

    });
  }


  agregarImagenNode() {
    let img = {
      nombre: 'fondo',
      tipo: 'png',
      url: this.urlImg,
    }

    this.serviceImagen.subirImagenNode(img, this.idEmpresa).subscribe((data: any) =>{
      console.log(data);
      this.obtenerImagenes();
    });
  }

  obtenerImagenes(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data:any) =>  this.imagenes = data.banco);
  }


  eliminarImagen(id){
    this.serviceImagen.eliminarImg(this.idEmpresa, id).subscribe((data:any) => this.obtenerImagenes());
 
    console.log(id);

    
  }

}
