import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rootUrl } from 'src/app/shared/header/constants';
import { authUrl }  from 'src/app/shared/header/constants';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  constructor(private httpClient: HttpClient) { }

  public añadirUsuario(user:any){
    console.log(`${rootUrl}${authUrl}/signup`);
    return this.httpClient.post(`${rootUrl}${authUrl}/signup`,user);
  }

  public checkAgilent(user:any){
    console.log(`${rootUrl}${authUrl}/agilent/${user.email}`);
    return this.httpClient.get(`${rootUrl}${authUrl}/agilent/${user.email}`,user);
  }
}
