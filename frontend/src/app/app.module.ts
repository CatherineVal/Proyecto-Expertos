import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule   } from '@ckeditor/ckeditor5-angular';

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
import { SidebarclienteComponent } from './componente/sidebarcliente/sidebarcliente.component';
import { DashboardclienteComponent } from './pages/dashboardcliente/dashboardcliente.component';
import { MisproductosComponent } from './pages/misproductos/misproductos.component';
import { CompraproductosComponent } from './pages/compraproductos/compraproductos.component';
import { NavbarempresaComponent } from './component/navbarempresa/navbarempresa.component';
import { NavbaradminComponent } from './componente/navbaradmin/navbaradmin.component';
import { NavbarpaginasComponent } from './pages/navbarpaginas/navbarpaginas.component';
import { FooterpaginasComponent } from './pages/footerpaginas/footerpaginas.component';
import { ImagenComponent } from './components/imagen/imagen.component';



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
    
    
    
    SidebarclienteComponent,
    
    
    
    DashboardclienteComponent,
    
    
    
    MisproductosComponent,
    
    
    
    CompraproductosComponent,
    
    
    
    NavbarempresaComponent,
    
    
    
    NavbaradminComponent,
    
    
    
    NavbarpaginasComponent,
    
    
    
    FooterpaginasComponent,
    
    
    
    ImagenComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
