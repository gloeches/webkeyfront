import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class MainUserService {

  constructor(private http:HttpClient) { 
    this.accessApi();
  }

  public getToken(){
    console.log
    return sessionStorage.getItem('token');
  }

  public accessApi():Observable<LoginModel>{
    console.log("entering AccessApi function....");
    const myUrl="http://localhost:8080/api/v1/resource"
    return this.http.get<LoginModel>(myUrl);
  }
}