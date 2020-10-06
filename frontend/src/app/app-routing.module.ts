import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';



const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: LoginAdministradorComponent },
  { path: 'registroCliente', component: RegistroClienteComponent },
  { path: 'registroEmpresa', component: RegistroEmpresaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
