import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas.service';
import { PlanService } from 'src/app/services/plan.service';
import { RoleService } from 'src/app/services/role.service';


@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {
  planes: any;
  alertaExito: boolean;
  empresa: any = {
    nombre: '',
    rtn: '',
    correo: '',
    contrasenia: '',
    direccion: '',
    plan: '',
    descripcion : '',
 
  }
  constructor(private planesService: PlanService, private empresaService: EmpresasService, private router: Router ) { }

  ngOnInit(): void {
    this.alertaExito = false;
    this.obtenerPlanes();
  }

  guardar() {
    this.alertaExito = true;
    console.log(this.empresa);

    this.empresaService.agregarEmpresa(this.empresa).subscribe((data: any) => {
      console.log(data);

      if(data){
        window.localStorage.setItem('empresa', JSON.stringify(data._id));
        this.router.navigate(['/dashboardEmpresa/bancoImg']);
       
      }

    });

  }

  obtenerPlanes() {
    this.planesService.obtenerplanes().subscribe((data: any) => {
    console.log(data);
      this.planes = data;
    });
  }

 

}
