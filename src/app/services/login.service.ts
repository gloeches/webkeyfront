import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rootUrl } from 'src/app/shared/header/constants';
import { authUrl }  from 'src/app/shared/header/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }
 //generamos el token
 public generateToken(loginData:any){
  console.log("entering generateToken function....");
  console.log(`${rootUrl}${authUrl}/signin`);
  console.log(loginData);
  

  return this.http.post(`${rootUrl}${authUrl}/signin` ,loginData);

}

  //obtenemos el token
  public getToken(){
    console.log("login service Enter: ");
    return sessionStorage.getItem('token')
 }
  public setUser(user:any){
    console.log('saving token into sessionStorage:')
    console.log(JSON.stringify(user));
    console.log('user: ');
    console.log(user.token);
    sessionStorage.setItem('token', user.token);
  }

  public loginUser(token:any){
    sessionStorage.setItem('token',token);
    return true;
  }


}
