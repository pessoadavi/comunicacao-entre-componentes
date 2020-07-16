import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho-service',
  templateUrl: './filho-service.component.html',
  styleUrls: ['./filho-service.component.css']
})
export class FilhoServiceComponent implements OnInit {

  message: string;

  constructor(private SharedService :SharedService) { }

  ngOnInit(): void {

      this.SharedService.currentMessage.subscribe(message =>
        this.message = message);
  }

}
