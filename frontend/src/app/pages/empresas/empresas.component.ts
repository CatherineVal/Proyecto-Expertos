import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any;
  planes:any;
  
  empresa: any={
    nombre:'',
    descripcion:'',
    correo:'',
    contrasenia:'',
    direccion:'',
    plan:'',
    estado:'',
    rtn:'',
  }

  constructor(private empresaService: EmpresasService, private planService: PlanService ) { 
    this.obtenerEmpresas();
  }

  ngOnInit(): void {

    this.obtenerPlanes();

  }
  obtenerEmpresas() {
    this.empresaService.obtenerempresas().subscribe( (data: any) => {
      


      console.log(data);
      this.empresas = data;

    });
  }

  obtenerPlanes() {
    this.planService.obtenerplanes().subscribe((data: any) => {

      console.log(data);
      this.planes = data;

    });
  }
  eliminarEmpresa(id) {
    console.log(this.empresa);
    this.empresaService.eliminarEmpresas(id).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerEmpresas();
      }
    })
  }
  
  agregarEmpresa() {
    console.log(this.empresa);
    this.empresaService.guardarEmpresa(this.empresa).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerEmpresas();
      }
    })
  }
}
