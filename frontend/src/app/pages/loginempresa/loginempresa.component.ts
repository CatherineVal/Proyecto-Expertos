import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-loginempresa',
  templateUrl: './loginempresa.component.html',
  styleUrls: ['./loginempresa.component.css']
})
export class LoginempresaComponent implements OnInit {

  empresa:any = {
    correo: '',
    contrasenia: ''
  }
  error:boolean;

  constructor( private empresaService: EmpresasService, private router:Router ) { }

  ngOnInit(): void {

    this.error = false;

  }

  login(){
    console.log(this.empresa);

    this.empresaService.login(this.empresa).subscribe((data:any)=>{
      //console.log(data);

      if(data==null){
        //console.log('No existe');
        this.error = true;
      }else{
        //console.log('Existe');
        window.localStorage.setItem('empresa', JSON.stringify(data._id));
        this.router.navigate(['/dashboardEmpresa']);
      }
    });
  }

}
