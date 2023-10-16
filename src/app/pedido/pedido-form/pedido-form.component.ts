import { Component } from '@angular/core';
import { ViaCep } from '../via-cep';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
  cep: string = '';
  observ: string = '';
  bairro: string = '';
  logradouro: string = '';

  endereco: any; // para armazenar os dados do CEP

  constructor(private viaCepService: ViaCep) { }

  buscarCep() {
    this.viaCepService.getCepData(this.cep).subscribe((data: any) => {
      this.endereco = data;
      this.logradouro = data.logradouro;
      this.bairro = data.bairro;
      console.log(data);
      // Preencha os campos do endereço com os dados obtidos

    });
  }
}
