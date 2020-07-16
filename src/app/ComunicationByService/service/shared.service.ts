import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<string>("mensagem inicial");
  currentMessage = this.messageSource.asObservable();

  private logicSource = new BehaviorSubject<boolean>(false);
  currentLogic = this.logicSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeLogic(logic: boolean) {
    this.logicSource.next(logic);
  }
}
