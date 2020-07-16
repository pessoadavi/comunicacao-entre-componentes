import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filho-output',
  templateUrl: './filho-output.component.html',
  styleUrls: ['./filho-output.component.css']
})
export class FilhoOutputComponent implements OnInit {

  mensagem: string = "eu mudei!!!"

  @Output()
  mensagemEvento: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem() {
    this.mensagemEvento.emit(this.mensagem);

  }

}
