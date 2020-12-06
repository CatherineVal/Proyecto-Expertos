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
    this.idEmpresa = window.localStorage.getItem('idEmpresa');
    this.obtenerPaginas();
  }


  obtenerPaginas() {
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      console.log(data);
      this.paginas = data.paginas;

    });
  }

  agregarPaginas() {
    console.log(this.pagina);
    this.servicePagina.guardarPagina(this.pagina, this.idEmpresa).subscribe((data: any) => {
      console.log(data);
      this.obtenerPaginas();


    })
  }



}