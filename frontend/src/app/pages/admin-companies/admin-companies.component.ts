import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ContenidoService } from 'src/app/services/contenido.service';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {

  constructor(private contenidoService: ContenidoService, private activateRoute: ActivatedRoute) { }

  public Editor = ClassicEditor;
  informacion: any = [];;
  contenido;
  idEmpresa;
  idPagina;
  dataContenido:any;
  desabilitar:boolean;

  public model = {
    //editorData: '<p>{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}</p>'
    editorData: '<p></p>'

  };

  ngOnInit(): void {

    this.idEmpresa = this.activateRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activateRoute.snapshot.paramMap.get('id');
    this.desabilitar = true;

    this.obtenerContenido();
  }

  obtenerData() {

    console.log(this.model.editorData);

    this.contenido = this.model.editorData;

    let contenido = {
      idEmpresa: this.idEmpresa,
      idPagina: this.idPagina,
      contenido: this.model.editorData

    }

    this.contenidoService.guardarContenido(contenido).subscribe((data: any) => {
      console.log(data);
      this.desabilitar = true;
    });

    this.infomacionSitio();
  }

  actulizarContendio(){

    let contenido = {
      idEmpresa: this.idEmpresa,
      idPagina: this.idPagina,
      contenido: this.model.editorData
    }

    this.contenidoService.actualizarContenido(this.dataContenido._id ,contenido).subscribe((data: any) => {
      console.log(data);
      this.obtenerContenido();      
    });
    

  }

  obtenerContenido() {
    this.contenidoService.obtenerContenido(this.idEmpresa, this.idPagina).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.desabilitar = false;
        this.model.editorData = data.contenido;
        this.dataContenido = data;

      }
    });
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

  }

}
