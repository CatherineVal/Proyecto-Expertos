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

import { NavbarComponent } from './componente/navbar/navbar.component';
import { SidebarEmpresaComponent } from './componente/sidebar-empresa/sidebar-empresa.component';
import { BancoImgComponent } from './pages/banco-img/banco-img.component';
import { DashboardEmpresaComponent } from './pages/dashboard-empresa/dashboard-empresa.component';
import { BancoVideosComponent } from './pages/banco-videos/banco-videos.component';
import { BancoArchivosComponent } from './pages/banco-archivos/banco-archivos.component';
import { AdministrarPagesComponent } from './pages/administrar-pages/administrar-pages.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LoginEComponent } from './pages/login-e/login-e.component';
import { SlidebarEComponent } from './pages/slidebar-e/slidebar-e.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { AdminCompaniesComponent } from './pages/admin-companies/admin-companies.component';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { LoginempresaComponent } from './pages/loginempresa/loginempresa.component';



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
    
    
    
    NavbarComponent,
    
    
    
    SidebarEmpresaComponent,
    
    
    
    BancoImgComponent,
    
    
    
    DashboardEmpresaComponent,
    
    
    
    BancoVideosComponent,
    
    
    
    BancoArchivosComponent,
    
    
    
    AdministrarPagesComponent,
    
    
    
    ProductosComponent,
    
    
    
    CategoriasComponent,
    
    
    
    GaleriaComponent,
    
    
    
    LoginEComponent,
    
    
    
    SlidebarEComponent,
    
    
    
    TarjetasComponent,
    
    
    
    CompaniesComponent,
    
    
    
    AdminCompaniesComponent,
    
    
    
    LoginadminComponent,
    
    
    
    LoginempresaComponent,
    
   
    
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
