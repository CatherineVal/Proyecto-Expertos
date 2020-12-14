import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input() data: any;

  productos: any;
  categorias: any;
  idPagina: any;
  idEmpresa: any;
  idCliente: any;
  constructor(private activateRoute: ActivatedRoute, private clienteServicce: ClientesService, private empresaService: EmpresasService) { }

  ngOnInit(): void {

    this.idEmpresa = this.activateRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activateRoute.snapshot.paramMap.get('id');

    this.idCliente = JSON.parse(window.localStorage.getItem('cliente'));


    this.obtenerEmpresa();

    console.log(this.data);

  }

  obtenerEmpresa() {
    this.empresaService.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      this.productos = data.productos;
      this.categorias = data.categorias;
      console.log(data);
    })
  }

  comprar(producto) {

    console.log(producto);

    if (this.idCliente) {
      this.clienteServicce.agregarProductos(producto, this.idCliente).subscribe((data: any) => {
        console.log(data);
      });

    }
  }

}
