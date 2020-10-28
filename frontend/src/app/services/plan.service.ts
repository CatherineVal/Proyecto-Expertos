import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }
  urlAppi: string = 'http://localhost:3000/plan';

  obtenerplanes() {
    return this.http.get(this.urlAppi);
  }

  guardarPlan(plan:any){
    return this.http.post(this.urlAppi, plan);
    
  }

  obtenerPlan(idPlan:any){
    return this.http.get(`${this.urlAppi}/${idPlan}`); // tambien se puede concatener con +
    //return this.http.get(this.urlAppi + '/' + idCliente);
  }


}