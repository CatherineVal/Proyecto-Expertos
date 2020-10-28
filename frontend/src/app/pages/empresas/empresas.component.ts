import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any;
  constructor(private empresaService: EmpresasService) { 
    this.obtenerEmpresas();
  }

  ngOnInit(): void {
  }
  obtenerEmpresas() {
    this.empresaService.obtenerempresas().subscribe( (data: any) => {
      


      console.log(data);
      this.empresas = data;

    });
  }
}
