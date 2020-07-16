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

  receberMensagem($event: string) {
    this.messagem = $event;
  }

}
