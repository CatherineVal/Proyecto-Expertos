import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-videos',
  templateUrl: './banco-videos.component.html',
  styleUrls: ['./banco-videos.component.css']
})
export class BancoVideosComponent implements OnInit {

  constructor() { }
  idEmpresa: any;

  ngOnInit(): void {

    this.idEmpresa = window.localStorage.getItem('idEmpresa');

  }


  obtenerEmpresa(){
    
  }
}
