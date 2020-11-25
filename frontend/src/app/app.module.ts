import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componente/app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';

import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './componente/sidebar/sidebar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { RolesComponent } from './pages/roles/roles.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import { NuevoRoleComponent } from './pages/nuevo-role/nuevo-role.component';
import { NavbarComponent } from './componente/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    
    LoginAdministradorComponent,
    
    RegistroEmpresaComponent,
    
    RegistroClienteComponent,
    
    DashboardComponent,
    
    SidebarComponent,
    
    ClientesComponent,
    
    UsuariosComponent,
    
    PlanesComponent,
    
    RolesComponent,
    
    EmpresasComponent,
    
    PlantillasComponent,
    
    NuevoRoleComponent,
    
    NavbarComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
