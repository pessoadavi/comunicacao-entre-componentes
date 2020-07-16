import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filho-output',
  templateUrl: './filho-output.component.html',
  styleUrls: ['./filho-output.component.css']
})
export class FilhoOutputComponent implements OnInit {

  mensagem: string = "eu mudei!!!"

  @Output()                                               // Decorator que indica qual variavel passará o valor ao comp. pai
  mensagemEvento: EventEmitter<any> = new EventEmitter(); // Variável do tipo emissor de evento, pois 
                                                          // quando ocorrer um event binding seu valor será passado
  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem() {                          // Método que fará a variável do tipo emissor de eventos
    this.mensagemEvento.emit(this.mensagem);  // emitir o valor que recebe de uma variável qualquer
                                              // quando ocorrer um event binding que chama esse método 
  }                                           // (como pode ser visto no html deste componente) 

}
