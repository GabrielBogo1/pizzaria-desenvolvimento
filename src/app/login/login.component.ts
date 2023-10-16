import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  senha: string = "";
  constructor(private router: Router, private http: HttpClient) { }

  Login() {
    console.log(this.email);
    console.log(this.senha);

    let bodyData = {
      email: this.email,
      senha: this.senha,
    };
    this.http.post("http://localhost:8080/api/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.mensagem == "Email inválido") {
        alert("Email inválido");
      }
      else if (resultData.mensagem == "Login realizado com sucesso" && resultData.admin == true) {
        this.router.navigateByUrl('/homeFuncionario');
      }
      else if (resultData.mensagem == "Login realizado com sucesso" && resultData.admin == false) {
        this.router.navigateByUrl('/homeUser');
      }
      else {
        alert("Login inválido");
      }
    });
  }
}
