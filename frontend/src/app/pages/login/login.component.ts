import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any ;

  constructor( private servicio:HttpClient ) { }

  ngOnInit(): void {
  }


  obtenerDatos(){

    this.servicio.get('https://jsonplaceholder.typicode.com/posts').subscribe( (data:any) => {

      

    });


  }



}
