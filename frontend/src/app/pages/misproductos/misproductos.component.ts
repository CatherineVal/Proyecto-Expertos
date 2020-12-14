import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.component.html',
  styleUrls: ['./misproductos.component.css']
})
export class MisproductosComponent implements OnInit {

  constructor( private serviceCliente: ClientesService) { }

  idCliente:any;
  cliente:any;
  compras:any;


  ngOnInit(): void {

    this.idCliente = JSON.parse(window.localStorage.getItem('cliente'));

    this.obtenerCliente();

  }

  obtenerCliente(){
    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((data:any)=>{
      this.cliente= data;
      this.compras= data.compras;

    });
  }

  eliminar(id){
    this.serviceCliente.eliminarProductos(id, this.idCliente).subscribe((data:any)=>{
      this.obtenerCliente();
      console.log(data);
    });
  }
}
