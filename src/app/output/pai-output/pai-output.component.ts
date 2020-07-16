import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai-output',
  templateUrl: './pai-output.component.html',
  styleUrls: ['./pai-output.component.css']
})
export class PaiOutputComponent implements OnInit {

  messagem: string = "oi mundo!"

  constructor() { }

  ngOnInit(): void {
  }

  receberMensagem($event: string) {   // Método que recebe o valor do evento ocorrido no comp. filho
    this.messagem = $event;           // valor de "mensagem" (que era oi mundo) mudou para "eu mudei" 
  }                                   // que veio do comp. filho 

}
