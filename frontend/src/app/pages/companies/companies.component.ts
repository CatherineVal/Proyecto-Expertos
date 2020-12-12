import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from 'src/app/services/contenido.service';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  idPagina: any;
  idEmpresa: any;
  empresa: any;
  paginas: any;
  contenido: any;
  informacion: any = [];

  // Shorcouts
  imagen:any;

  constructor(private activateRoute: ActivatedRoute, private empresaService: EmpresasService, private contenidoServico: ContenidoService) { }

  //'<p>tipo:{'imagen',id:56bcvb5545shjh65}</p>'
  //<p>"tipo":{"imagen","id":"56bcvb5545shjh65"}</p>

  ngOnInit(): void {

    this.idEmpresa = this.activateRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activateRoute.snapshot.paramMap.get('id');

    this.obtenerEmpresa();
    this.obtenerContendo();
  }

  obtenerContendo() {
    this.contenidoServico.obtenerContenido(this.idEmpresa, this.idPagina).subscribe((data: any) => {
      if (data) {
        this.contenido = data.contenido;
        //console.log(data);
        this.infomacionSitio();

      }

    })
  }


  obtenerEmpresa() {
    this.empresaService.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      this.empresa = data;
      this.paginas = data.paginas;
      //console.log(data);
    })
  }

  infomacionSitio() {

    let inicio = 0;
    let fin = 0;
    let c = 0;

    while (this.contenido.length != 0) {
      // statement
      if (this.contenido[inicio] == '{') {
        fin = this.contenido.indexOf('}', inicio);
        this.informacion[c] = JSON.parse(this.contenido.substring(inicio, fin + 1));
        inicio = fin;
        c++;
      }
      this.contenido = this.contenido.substring(fin + 1, this.contenido.length);

      fin = 0;
      inicio = 0;
    }

    console.log(this.informacion);
    this.obtenerSchorcouts();

  }

  obtenerSchorcouts(){

    for (let j = 0; j < this.informacion.length; j++) {
     
      if (this.informacion[j].tipo == 'imagen') {
        this.imagen = this.informacion[j];
      }
      
    }

  }

}
