import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baserUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }
 //generamos el token
 public generateToken(loginData:any){
  return this.http.post(`${this.baserUrl}/generate-token`,loginData);
}

public getCurrentUser(){
  return this.http.get(`${this.baserUrl}/actual-usuario`);
}

}
