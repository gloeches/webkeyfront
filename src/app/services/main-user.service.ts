import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login.model';
import { rootUrl } from 'src/app/shared/header/constants';
import { authUrl }  from 'src/app/shared/header/constants';

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
    const myUrl=`${rootUrl}/api/v1/resource`;
    return this.http.get<LoginModel>(myUrl);
  }
}