import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private loginService:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Entering authInterceptorService");
    let authReq = req;
    const token = this.loginService.getToken();
    console.log(`from intercept token: ${token}`)
    if(token != null){
      authReq = authReq.clone({
      setHeaders : {Authorization: `Bearer ${token}`}
      })
 //     authReq.headers.append('Access-Control-Allow-Origin','*');
    } 
    return next.handle(authReq);

  }
}

export const authInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }
]
