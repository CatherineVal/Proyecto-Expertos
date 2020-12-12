import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  alertExito: boolean;
  cliente: any ={
    nombre:'',
    apellido:'',
    usuario:'',
    correo:'',
    contrasenia:'',

  }
  constructor(private clienteService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.alertExito = false;
  }


  alert(){
    this.alertExito = true;
  }

  
  guardar() {
    this.alertExito = true;
    console.log(this.cliente);

    this.clienteService.agregarcliente(this.cliente).subscribe((data: any) => {
      console.log(data);

      if(data){
        window.localStorage.setItem('cliente', JSON.stringify(data._id));
        this.router.navigate(['/dashboardcliente/misproductos']);
       
      }

    });

  }


}
