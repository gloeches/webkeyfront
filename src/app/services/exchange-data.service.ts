import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
  private loginStatus=new BehaviorSubject('login');
  private messageSubject = new BehaviorSubject<string>("cadena inicializada");
  CurrentMessage: Observable<string> = this.messageSubject;

  constructor() { }
  changeMessage(message: string){
    this.loginStatus.next(message);
    this.messageSubject.next(message);
  }
}
