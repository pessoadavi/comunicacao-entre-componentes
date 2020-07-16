import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho-input',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input()                  // Decorator que indica que a variável receberá a informação do componente pai 
  mensagem: string;         // Variável que receberá a informação 

  texto: string = "Diga"
  
  constructor() { }

  ngOnInit(): void {
  }

}
