import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailModel } from '../model/email-model';
import { ConstantsService } from '../shared/header/constants.service'; // <-- 1. Import ConstantsService

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    public mailData: EmailModel;
    // 2. Inject ConstantsService in the constructor
  constructor(private http:HttpClient, private constants: ConstantsService) { 
    this.mailData= new EmailModel(constants);
  }
 //generamos el token
 public generateToken(loginData:any){
  console.log("entering generateToken function....");
  // 3. Use the injected service properties to build the URL
  const signinUrl = `${this.constants.rootUrl}${this.constants.authUrl}/signin`;

  console.log(signinUrl);
  console.log(`login.service (logingData): ${loginData.email}`);
  console.log(loginData);
  

  return this.http.post(signinUrl, loginData);

}
// 4. Also use the service here for the emailUrl
public resetPassword(emailAddress:string){
  const resetUrl = `${this.constants.emailUrl}/htmlemail/${emailAddress}`;
  return this.http.post(resetUrl, this.mailData);
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

  public cleanToken(){
    sessionStorage.clear();
  }


}
