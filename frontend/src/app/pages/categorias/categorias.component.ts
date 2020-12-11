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

  constructor(private serviceCategoria: CategoriaService, private serviceEmpresa: EmpresasService) {
  }
  ngOnInit(): void {
    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      console.log(data);
      this.categorias = data.categorias;
    });
  }

  validarCampos() {

    if (this.categoria.nombre == '') return false;
    if (this.categoria.descripcion == '') return false;

    return true;
  }


  eliminarCategoria(id) {
    console.log(this.categoria);
    this.serviceCategoria.eliminarCategoria(this.idEmpresa, id).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerCategorias();
      }
    })
  }



  agregarCategoria() {
    console.log(this.categoria);

    if (this.validarCampos()) {
      this.serviceCategoria.agregarCategoria(this.idEmpresa, this.categoria).subscribe((data: any) => {
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

