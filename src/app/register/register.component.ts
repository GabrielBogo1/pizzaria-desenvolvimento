import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  nomeFuncionario: string = "";
  email: string = "";
  senha: string = "";
  admin: boolean = true;

  constructor(private http: HttpClient) {
  }

  save() {
    let bodyData = {
      "nomeFuncionario": this.nomeFuncionario,
      "email": this.email,
      "senha": this.senha,
      "admin": this.admin
    };
    this.http.post("http://localhost:8080/api/funcionario", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Registrado com sucesso");
    });
  }

}
