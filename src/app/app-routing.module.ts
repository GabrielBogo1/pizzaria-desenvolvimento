import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FuncionarioHomeComponent } from './homeFunc/funcionario-home/funcionario-home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsuarioHomeComponent } from './homeUsuario/usuario-home/usuario-home.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'homeFuncionario', component: FuncionarioHomeComponent },
{ path: 'registerUser', component: RegisterUserComponent },
{ path: 'homeUser', component: UsuarioHomeComponent },
{ path: 'novoPedido', component: PedidoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
