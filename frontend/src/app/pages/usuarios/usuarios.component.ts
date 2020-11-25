import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any;
  roles:any;

  usuario:any = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasenia: '',
    rol: '',
    estado: '',
  }


  constructor(private usuarioService: UsuariosService, private serviceRoles: RoleService) { }

  ngOnInit(): void {
    this.obtenerUSuarios();
    this.obtenerRoles();
  }

  obtenerUSuarios() {
    this.usuarioService.obtenerusuarios().subscribe((data: any) => {

      console.log(data);
      this.usuarios = data;

    });
  }

  obtenerRoles() {
    this.serviceRoles.obtenerRoles().subscribe((data: any) => {

      console.log(data);
      this.roles = data;

    });
  }

  agregarUsuario(){
    console.log(this.usuario);

    this.usuarioService.guardarUsuarios(this.usuario).subscribe((data:any) =>{
      console.log(data);

      if (data) {
        console.log(data);
        this.obtenerUSuarios();
      }
    })
  }

  eliminarUsuario(id){

    this.usuarioService.eliminarUsuarios(id).subscribe((data:any) =>{
      console.log(data);

      if (data) {
        console.log(data);
        this.obtenerUSuarios();
      }
    })
  }
}


