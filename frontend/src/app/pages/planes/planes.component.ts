import { Component, OnInit } from '@angular/core';
import {PlanService} from 'src/app/services/plan.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  plan: any;
  planAgg: any={
    nombre: '',
    descripcion:'',
    precio:'',
  }
  constructor(private planService: PlanService) {
    this.obtenerPlanes();
   }

  ngOnInit(): void {
  }
  obtenerPlanes(){
    this.planService.obtenerplanes().subscribe( (data: any) => {
      


      console.log(data);
      this.plan = data;

    });
  }
  
  agregarPlan() {
    console.log(this.planAgg);
    this.planService.guardarPlan(this.planAgg).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerPlanes();
      }
    })
  }
  eliminarPlan(id) {
    console.log(this.planAgg);
    this.planService.eliminarPlan(id).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.obtenerPlanes();
      }
    })
  }


}
