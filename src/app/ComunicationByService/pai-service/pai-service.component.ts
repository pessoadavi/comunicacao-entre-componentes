import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-pai-service',
  templateUrl: './pai-service.component.html',
  styleUrls: ['./pai-service.component.css']
})
export class PaiServiceComponent implements OnInit {

  message:string;
  logic: Boolean;

  constructor(private sharedService :SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(message =>
      this.message = message);
    this.sharedService.currentLogic.subscribe(logic =>
      this.logic = logic);
  }
}
