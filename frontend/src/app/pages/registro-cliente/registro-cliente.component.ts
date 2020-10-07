import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  alertExito: boolean;
  constructor() { }

  ngOnInit(): void {
    this.alertExito = false;
  }


  alert(){
    this.alertExito = true;

    setTimeout(() => { this.alertExito = false; }, 3000);
  }

}
