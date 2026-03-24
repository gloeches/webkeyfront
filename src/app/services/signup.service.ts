import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from '../shared/header/constants.service'; // <-- 1. Import ConstantsService

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  constructor(private httpClient: HttpClient, private constants: ConstantsService) { }

  public añadirUsuario(user:any){
    console.log(`${this.constants.rootUrl}${this.constants.authUrl}/signup`);
    return this.httpClient.post(`${this.constants.rootUrl}${this.constants.authUrl}/signup`,user);
  }

  public checkAgilent(user:any){
    console.log(`${this.constants.rootUrl}${this.constants.authUrl}/agilent/${user.email}`);
    return this.httpClient.get(`${this.constants.rootUrl}${this.constants.authUrl}/agilent/${user.email}`,user);
  }
}
