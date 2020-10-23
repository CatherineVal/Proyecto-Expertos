import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevoRoleComponent } from './pages/nuevo-role/nuevo-role.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';




const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: LoginAdministradorComponent },
  { path: 'registroCliente', component: RegistroClienteComponent },
  { path: 'registroEmpresa', component: RegistroEmpresaComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      
      {path: 'clientes', component: ClientesComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'roles', component: RolesComponent},
      {path: 'empresas', component: EmpresasComponent},
      {path: 'plantillas', component: PlantillasComponent},
      {path: 'planes', component: PlanesComponent},
      {path: 'nuevo-role', component: NuevoRoleComponent},
  ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
