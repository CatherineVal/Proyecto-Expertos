import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbarpaginas',
  templateUrl: './navbarpaginas.component.html',
  styleUrls: ['./navbarpaginas.component.css']
})
export class NavbarpaginasComponent implements OnInit {

  @Input() paginas:any;
  idEmpresa:any;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.paginas);
    this.idEmpresa = this.activateRoute.snapshot.paramMap.get('idEmpresa');

  }

}
