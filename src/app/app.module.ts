import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioHomeComponent } from './homeFunc/funcionario-home/funcionario-home.component';
import { UsuarioHomeComponent } from './homeUsuario/usuario-home/usuario-home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { HeaderComponent } from './layout/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FuncionarioHomeComponent,
    UsuarioHomeComponent,
    RegisterUserComponent,
    PedidoFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
