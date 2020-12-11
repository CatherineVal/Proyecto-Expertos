import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-administrar-pages',
  templateUrl: './administrar-pages.component.html',
  styleUrls: ['./administrar-pages.component.css']
})
export class AdministrarPagesComponent implements OnInit {
  paginas: any;
  idEmpresa: any;
  error:boolean;

  pagina: any = {
    nombre: '',
    descripcion: '',
    palabraClave: '',
    encabezado: false,
    piePage: false,
    urlLogo: '',
  }

  constructor(private serviceEmpresa: EmpresasService, private servicePagina: PaginaService) { }

  ngOnInit(): void {
    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
    this.obtenerPaginas();
  }


  obtenerPaginas() {
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
     // console.log(data);
      this.paginas = data.paginas;

    });
  }

  EliminarPaginas(pagina) {
    this.servicePagina.eliminarPagina(this.idEmpresa, pagina).subscribe((data: any) => {
    //  console.log(data);
      this.obtenerPaginas();

    });
  }


  agregarPaginas() {
    //console.log(this.pagina);

    if(this.validarCampos()){
      this.servicePagina.guardarPagina(this.pagina, this.idEmpresa).subscribe((data: any) => {
      //  console.log(data);
        this.obtenerPaginas();
      })
    }else{
      this.error = true;
    }

    
  }

  validarCampos() {

    if (this.pagina.nombre == '') return false;
    if (this.pagina.descripcion == '') return false;
    if (this.pagina.urlLogo == '') return false;
    return true;
  }


}