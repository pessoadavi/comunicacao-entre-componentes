import { Component } from '@angular/core';
import { SharedService } from './ComunicationByService/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logic: boolean = false;

  constructor(private sharedService :SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentLogic.subscribe(logic =>
      this.logic = logic);
    
  }

  
}
