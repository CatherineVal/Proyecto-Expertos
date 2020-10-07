import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  alertaExito: boolean;
  constructor() { }

  ngOnInit(): void {
    this.alertaExito = false;

  }

  guardar() {
    this.alertaExito = true;

    setTimeout(() => { this.alertaExito = false; }, 3000);

  }

}
