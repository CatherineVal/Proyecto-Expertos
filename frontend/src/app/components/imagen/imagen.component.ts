import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() imagen: any;
  imagenData: any;
  idEmpresa: any;
  Imagenes: any;


  constructor(private serviceEmpresa: EmpresasService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //console.log('Imagen ',this.imagen);
    this.idEmpresa = this.activateRoute.snapshot.paramMap.get('idEmpresa');
    this.obtenerImagen();
  }

  obtenerImagen() {
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      //this.Imagenes = data.banco;
      console.log('Imagenes ', data.banco);

      for (let j = 0; j < data.banco.length; j++) {
        if( data.banco[j]._id == this.imagen.id ){
          this.imagenData = data.banco[j];
        }
      }

    });
  }

}
