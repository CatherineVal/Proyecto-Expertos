import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { LoginComponent } from './pages/login/login.component';

import { PlanesComponent } from './pages/planes/planes.component';
import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DashboardEmpresaComponent, } from './pages/dashboard-empresa/dashboard-empresa.component';
import { BancoImgComponent } from './pages/banco-img/banco-img.component';
import { BancoVideosComponent } from './pages/banco-videos/banco-videos.component';
import { BancoArchivosComponent } from './pages/banco-archivos/banco-archivos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { AdministrarPagesComponent } from './pages/administrar-pages/administrar-pages.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LoginEComponent } from './pages/login-e/login-e.component';
import { SlidebarEComponent } from './pages/slidebar-e/slidebar-e.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { AdminCompaniesComponent } from './pages/admin-companies/admin-companies.component';
import { LoginempresaComponent } from './pages/loginempresa/loginempresa.component';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { DashboardclienteComponent } from './pages/dashboardcliente/dashboardcliente.component';
import { CompraproductosComponent } from './pages/compraproductos/compraproductos.component';
import { MisproductosComponent } from './pages/misproductos/misproductos.component';
import { NavbarpaginasComponent } from './pages/navbarpaginas/navbarpaginas.component';
import { FooterpaginasComponent } from './pages/footerpaginas/footerpaginas.component';

















const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: LoginAdministradorComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'loginempresa', component: LoginempresaComponent },
  { path: 'loginadmin', component: LoginadminComponent },
  { path: 'navbarpaginas', component: NavbarpaginasComponent },
  { path: 'footerpaginas', component: FooterpaginasComponent },




  { path: 'loginE', component: LoginEComponent },
  { path: 'slidebarE', component: SlidebarEComponent },
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'companies/:idEmpresa/pages/:id', component: CompaniesComponent  },
  { path: 'admin-companies/:idEmpresa/pages/:id', component: AdminCompaniesComponent },


  { path: 'registroCliente', component: RegistroClienteComponent },
  { path: 'registroEmpresa', component: RegistroEmpresaComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [

      { path: 'clientes', component: ClientesComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'empresas', component: EmpresasComponent },
      { path: 'plantillas', component: PlantillasComponent },
      { path: 'planes', component: PlanesComponent },
    ]
  },

  {
    path: 'dashboardEmpresa', component: DashboardEmpresaComponent, children: [
      { path: 'bancoImg', component: BancoImgComponent },
      { path: 'bancoVideos', component: BancoVideosComponent },
      { path: 'bancoArchivos', component: BancoArchivosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'administrarPages', component: AdministrarPagesComponent },
    ]
  },

  {
    path: 'dashboardcliente', component: DashboardclienteComponent, children: [
      { path: 'compraproductos', component: CompraproductosComponent },
      { path: 'misproductos', component: MisproductosComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
