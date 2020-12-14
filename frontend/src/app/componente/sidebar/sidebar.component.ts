import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  idAdmin: any;
  nombre: any;
  
  constructor( private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
  
    this.idAdmin = JSON.parse(window.localStorage.getItem('admin'));

    this.obtenerEmpresa();
  }

  // ng build --prod

  obtenerEmpresa(){
    this.usuariosService.obtenerUsuarios(this.idAdmin).subscribe((data:any) =>  this.nombre = data.nombre);
  }

  

}
