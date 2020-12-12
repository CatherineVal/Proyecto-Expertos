import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-navbarempresa',
  templateUrl: './navbarempresa.component.html',
  styleUrls: ['./navbarempresa.component.css']
})
export class NavbarempresaComponent implements OnInit {
  idEmpresa: any;
  nombre: any;
  constructor( private serviceEmpresa: EmpresasService) { }

  ngOnInit(): void {
  
    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));

    this.obtenerEmpresa();
  }

  obtenerEmpresa(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data:any) =>  this.nombre = data.nombre);
  }

  

}
