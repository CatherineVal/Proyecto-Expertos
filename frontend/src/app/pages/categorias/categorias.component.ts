import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any;
  urlImg: string;
  idEmpresa: any;
  imagenes: any;
  imagenSubida: any;
  error: any = false;

  categoria: any = {
    nombre: '',
    descripcion: '',

  }

  constructor(private serviceCategoria: CategoriaService, private serviceImagen: ImagenService, private serviceEmpresa: EmpresasService) {
    this.obtenerCategorias();
  }
  ngOnInit(): void {
    this.idEmpresa = window.localStorage.getItem('idEmpresa');
    this.imagenSubida = false;

    this.obtenerImagenes();
  }

  obtenerImagenes() {
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => this.imagenes = data.banco);
  }
  obtenerCategorias() {
    this.serviceCategoria.obtenerCategorias().subscribe((data: any) => {
      console.log(data);
      this.categorias = data;
      this.imagenSubida = false;

    });
  }

  validarCampos() {

    if (this.categoria.nombre == '') return false;
    if (this.categoria.descripcion == '') return false;

    return true;
  }



  subirImagen(e) {
    let imagen = e.target.files[0];
    console.log(imagen);
    const formData = new FormData();
    formData.append('upload_preset', 'bancoImg');
    formData.append('file', imagen);

    this.serviceImagen.subirImagen(formData).subscribe((data: any) => {
      this.urlImg = data.url;
      this.imagenSubida = true;
      console.log(data);
      this.agregarImagenNode();

    });
  }


  eliminarCategoria(id) {
    console.log(this.categoria);
    this.serviceCategoria.eliminarCategoria(id).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerCategorias();
      }
    })
  }

  agregarImagenNode() {
    let img = {
      nombre: 'fondo',
      tipo: 'png',
      url: this.urlImg,
    }

    this.serviceImagen.subirImagenNode(img, this.idEmpresa).subscribe((data: any) => {
      console.log(data);
    });
  }

  agregarCategoria() {
    console.log(this.categoria);

    if (this.validarCampos()) {
      this.serviceCategoria.guardarCategoria(this.categoria).subscribe((data: any) => {
        if (data) {
          console.log(data);
          this.obtenerCategorias();
        }
      })
    }else{
      this.error = true
    }
    
  }


}

