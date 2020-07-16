import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai-input',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  mensage: string = ""

  logic: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clique() {
    this.logic = !this.logic;
    if(this.logic == true ) {
      this.mensage = "true";
      console.log(this.logic);
    }else {
      this.mensage = "falso";
      console.log(this.logic);
    } 
      
  }
  
}
