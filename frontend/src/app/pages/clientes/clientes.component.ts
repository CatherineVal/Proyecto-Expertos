import { CompileMetadataResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any;
  cliente: any = {
    nombre: '',
    apellido: '',
    usuario: '',
    contrasenia: '',
    correo: '',
    compras: '',
    estado: '',

  }
  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientes();

  }


  obtenerClientes() {
    this.clienteService.obtenerclientes().subscribe((data: any) => {

      console.log(data);
      this.clientes = data;

    });
  }

  agregarcliente() {
    console.log(this.cliente);
    this.clienteService.guardarCliente(this.cliente).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerClientes();
      }
    })
  }

  eliminarCliente(id) {
    console.log(this.cliente);
    this.clienteService.eliminarCliente(id).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerClientes();
      }
    })
  }

}
