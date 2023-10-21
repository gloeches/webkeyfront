import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
  private loginStatus=new BehaviorSubject<boolean>(false);
  private messageSubject = new BehaviorSubject<string>("cadena inicializada");
  CurrentMessage: Observable<string> = this.messageSubject;
  CurrentStatus: Observable<boolean>=this.loginStatus;

  constructor() { }
  changeMessage(message: string){
    
    this.messageSubject.next(message);
  }
  changeStatus(status:boolean){
    this.loginStatus.next(status)
  }
}
