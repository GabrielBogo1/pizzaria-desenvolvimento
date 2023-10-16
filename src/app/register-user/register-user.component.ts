import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViaCep } from '../pedido/via-cep';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  nomeUsuario: string = "";
  email: string = "";
  senha: string = "";
  telefone: string = "";
  admin: boolean = false;
  

  constructor(private http: HttpClient, private viaCep: ViaCep) {
  }

  cep: string = '';
  observ: string = '';
  bairro: string = '';
  logradouro: string = '';

  endereco: any = {
    cep: '',
    logradouro: '',
    bairro: '',
    // Outras propriedades de endereço, se houver...
  };

  buscarCep() {
    this.viaCep.getCepData(this.cep).subscribe((data: any) => {
      this.endereco = data;
      this.logradouro = data.logradouro;
      this.bairro = data.bairro;
      console.log(data);
      // Preencha os campos do endereço com os dados obtidos

    });
  }


  save() {
    let bodyData = {
      "nomeUsuario": this.nomeUsuario,
      "email": this.email,
      "senha": this.senha,
      "telefone": this.telefone,
      "admin": this.admin,
      "endereco": this.endereco
    };
    this.http.post("http://localhost:8080/api/usuario", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Registrado com sucesso");
    });
  }




}
