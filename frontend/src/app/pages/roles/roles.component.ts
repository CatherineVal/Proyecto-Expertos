import { Component, OnInit } from '@angular/core';
import {RoleService} from 'src/app/services/role.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  role:any;
  roles: any = {
    nombre:'',
    descripcion:''
  }
  constructor(private RoleService: RoleService) {
    this.obtenerRole();
   }

  ngOnInit(): void {
  }

  obtenerRole(){
    this.RoleService.obtenerRoles().subscribe( (data: any) => {
      console.log(data);
      this.role = data;

    });
  }
  
  validarCampos() {

    if (this.roles.nombreProducto == '') return false;
    if (this.roles.descripcion == '') return false;
    return true;
  }

  agregarRole() {
    this.RoleService.guardarRole(this.roles).subscribe((data:any)=> {
      console.log(data);
      this.obtenerRole();
    });
  }

  eliminarRole(idRole){
    this.RoleService.eliminarRole(idRole).subscribe((data:any)=> {
     this.obtenerRole();
      console.log(data);
    });
  }

}
