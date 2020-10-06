import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componente/app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';

import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    
    LoginAdministradorComponent,
    
    RegistroEmpresaComponent,
    
    RegistroClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
