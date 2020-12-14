import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-sidebarcliente',
  templateUrl: './sidebarcliente.component.html',
  styleUrls: ['./sidebarcliente.component.css']
})
export class SidebarclienteComponent implements OnInit {

  cliente:any;
  idCliente:any;

  constructor( private serviceCliente: ClientesService ) { }

  ngOnInit(): void {
    this.idCliente = JSON.parse(window.localStorage.getItem('cliente'));

    this.obtenerCliente();
  }

  obtenerCliente(){
    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((data:any)=>{
      this.cliente= data.nombre;

    });
  }

}
