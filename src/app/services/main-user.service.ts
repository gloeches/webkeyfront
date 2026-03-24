import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login.model';
import { ConstantsService } from '../shared/header/constants.service'; // <-- 1. Import ConstantsService
@Injectable({
  providedIn: 'root'
})
export class MainUserService {

  constructor(private http:HttpClient, private constants: ConstantsService) { 
    this.accessApi();
  }

  public getToken(){
    console.log
    return sessionStorage.getItem('token');
  }

  public accessApi():Observable<LoginModel>{
    console.log("entering AccessApi function....");
    const myUrl=`${this.constants.rootUrl}/api/v1/resource`;
    return this.http.get<LoginModel>(myUrl);
  }
}