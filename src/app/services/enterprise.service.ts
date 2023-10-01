import { Injectable } from '@angular/core';
import {Enterprise} from '../pages/enterprises/enterprise'
import { ENTERPRISES } from '../mock-enterprises'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { VersionModel } from '../model/version';
import { apiUrl, rootUrl } from 'src/app/shared/header/constants';
import { authUrl }  from 'src/app/shared/header/constants';


@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private enterpriseUrl=`${rootUrl}${apiUrl}/enterprises`;

  constructor( private http: HttpClient, private messageService: MessagesService) { };
 
  getEnterprises(): Observable<Enterprise[]>{
    console.log ('getEnterprises collecting data')
    console.log(this.enterpriseUrl)
    return this.http.get<Enterprise[]>(this.enterpriseUrl);
  }
  getEnterpriseLikeName(_name: string): Observable<Enterprise[]>{
    const mainUrl=this.enterpriseUrl;
    const url=mainUrl+'?name='+_name;
    console.log(url);
    return this.http.get<Enterprise[]>(url);

  }
  getLogin(){
    const myUrl="http:/localhost:8080/login";
    console.log("entering login: "+myUrl);
    return this.http.get(myUrl);
  }

  getVersion(): Observable<VersionModel>{
    
    const myUrl=`${rootUrl}${authUrl}/version`;
//    const myUrl="http://localhost:8080/api/v1/auth/version"
    console.log("entering version module: "+myUrl);
    return this.http.get<VersionModel>(myUrl);
  }
}
