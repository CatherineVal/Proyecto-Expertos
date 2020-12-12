import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ClientesService } from 'src/app/services/clientes.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any ;
  cliente: any ={
    correo:'',
    contrasenia:''
  }
  error:boolean;
  constructor( private servicio:HttpClient , private clienteService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.error =false;
  }


  obtenerDatos(){

    this.servicio.get('https://jsonplaceholder.typicode.com/posts').subscribe( (data:any) => {

      

    });


  }

  login(){
    console.log(this.cliente);

    this.clienteService.login(this.cliente).subscribe((data:any)=>{
      //console.log(data);

      if(data==null){
        //console.log('No existe');
        this.error = true;
      }else{
        //console.log('Existe');
        window.localStorage.setItem('cliente', JSON.stringify(data._id));
        this.router.navigate(['/dashboardcliente/misproductos']);
      }
    });
  }

}
