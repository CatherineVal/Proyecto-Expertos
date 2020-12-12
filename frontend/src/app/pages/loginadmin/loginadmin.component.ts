import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  admin: any = {
    correo: '',
    contrasenia: ''
  }

  error: boolean;

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.error = false;
  }


  login(){
    console.log(this.admin);
    this.usuariosService.login(this.admin).subscribe((data: any) => {
      //console.log(data);

      if (data == null) {
        //console.log('No existe');
        this.error = true;
      } else {
        //console.log('Existe');
        window.localStorage.setItem('admin', JSON.stringify(data._id));
        this.router.navigate(['/dashboard/usuarios']);
      }
    });
  }


}


