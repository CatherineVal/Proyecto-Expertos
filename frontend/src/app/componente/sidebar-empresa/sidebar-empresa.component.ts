import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-sidebar-empresa',
  templateUrl: './sidebar-empresa.component.html',
  styleUrls: ['./sidebar-empresa.component.css']
})
export class SidebarEmpresaComponent implements OnInit {
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
