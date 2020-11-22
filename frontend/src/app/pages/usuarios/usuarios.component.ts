import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any;
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUSuarios();
  }

  obtenerUSuarios() {
    this.usuarioService.obtenerusuarios().subscribe((data: any) => {

      console.log(data);
      this.usuarios = data;

    });
  }
}


