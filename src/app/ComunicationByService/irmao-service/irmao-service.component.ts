import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-irmao-service',
  templateUrl: './irmao-service.component.html',
  styleUrls: ['./irmao-service.component.css']
})
export class IrmaoServiceComponent implements OnInit {

  message: string;
  logic: boolean = false;

  constructor(private sharedService :SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(message =>
      this.message = message);
  }

  newMessage() {
    this.logic = !this.logic;
    if(this.logic == false) {
      this.sharedService.changeMessage("parelelepipedo");
      this.sharedService.changeLogic(this.logic);
    } else {
      this.sharedService.changeMessage("losango");
      this.sharedService.changeLogic(this.logic);
    }
  }

}
