import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho-input',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input()
  mensagem: string;

  texto: string = "Diga"
  
  constructor() { }

  ngOnInit(): void {
  }

}
