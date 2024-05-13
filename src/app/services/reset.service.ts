import { Injectable } from '@angular/core';
import { authUrl, rootUrl } from '../shared/header/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(public httpClient:HttpClient) { }

  public resetPassword(user:any){
    console.log(`${rootUrl}${authUrl}/resetpass`);
    return this.httpClient.post(`${rootUrl}${authUrl}/resetpass`,user);
  }
}
