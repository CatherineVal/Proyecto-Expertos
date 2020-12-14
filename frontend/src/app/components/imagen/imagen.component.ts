import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from 'src/app/services/contenido.service';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  imagen: any;
  imagenData: any;
  idEmpresa: any;
  imagenes: any = [];
  informacion:any = [];
  contenido:any;
  idPagina;
  idImagen:String;
  id:String;



  constructor(private serviceEmpresa: EmpresasService, private activateRoute: ActivatedRoute, private contenidoServico:ContenidoService) { }

  ngOnInit(): void {

    this.idEmpresa = this.activateRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activateRoute.snapshot.paramMap.get('id');


    this.obtenerImagenes();
    this.obtenerContendo();
  }

  obtenerContendo() {
    this.contenidoServico.obtenerContenido(this.idEmpresa, this.idPagina).subscribe((data: any) => {
      if (data) {
        this.contenido = data.contenido;
        console.log(data);
        this.infomacionSitio();
      }

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

  obtenerImagenes() {
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      this.imagenes = data.banco;
      //console.log('Imagenes ', data.banco);
    });
  }

  obtenerSchorcouts(){

    for (let j = 0; j < this.informacion.length; j++) {
     
      if (this.informacion[j].tipo == 'imagen') {
        this.imagen = this.informacion[j];
      }
    }

    this.id = this.imagen.id;


    for (let j = 0; j < this.imagenes.length; j++) {
   
      this.id = this.imagenes[j]._id;

      if (this.id === this.id ) {
        this.imagenData = this.imagenes[j].url;
      }
    
    }
    console.log(this.imagenData);
  }

}
