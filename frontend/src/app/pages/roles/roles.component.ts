import { Component, OnInit } from '@angular/core';
import {RoleService} from 'src/app/services/role.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  role:any;
  constructor(private RoleService: RoleService) {
    this.obtenerRole();
   }

  ngOnInit(): void {
  }

  obtenerRole(){
    this.RoleService.obtenerRoles().subscribe( (data: any) => {
      


      console.log(data);
      this.role = data;

    });
  }
  

}
