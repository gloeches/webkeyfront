import { Injectable } from '@angular/core';
import {Enterprise} from '../pages/enterprises/enterprise'
import { ENTERPRISES } from '../mock-enterprises'
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { VersionModel } from '../model/version';
import { ConstantsService } from '../shared/header/constants.service'; // <-- 1. Import ConstantsService
//import { rootUrl } from 'src/app/shared/header/constants';
import { authUrl, apiUrl}  from 'src/app/shared/header/constants';


@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  public rootUrl:string;
  private enterpriseUrl:string;
  private enterpriseAdminUrl:string;
  private enterprisesUrl:string
  httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor( private http: HttpClient, private messageService: MessagesService,private constantsService: ConstantsService) { 
    this.rootUrl=this.constantsService.rootUrl;
    this.enterpriseUrl=`${this.rootUrl}${apiUrl}/enterprise`;
    this.enterpriseAdminUrl=`${this.rootUrl}${apiUrl}/admin/enterprise`;
    this.enterprisesUrl=`${this.rootUrl}${apiUrl}/enterprises`;
    console.log('EnterpriseService: constructor');
    console.log('EnterpriseService: rootUrl='+this.rootUrl);
    console.log('EnterpriseService: enterpriseUrl='+this.enterpriseUrl);
    console.log('EnterpriseService: enterpriseAdminUrl='+this.enterpriseAdminUrl);
    console.log('EnterpriseService: enterprisesUrl='+this.enterprisesUrl);
  };
 
  getEnterprises(): Observable<Enterprise[]>{
    console.log ('getEnterprises collecting data')
    console.log(this.enterprisesUrl)
    return this.http.get<Enterprise[]>(this.enterprisesUrl);
  }
  getEnterpriseLikeName(_name: string): Observable<Enterprise[]>{
    const mainUrl=this.enterprisesUrl;
    const url=mainUrl+'?name='+_name;
    console.log(url);
    return this.http.get<Enterprise[]>(url);

  }
  getEnterpriseById(id:number): Observable<Enterprise>{
    const mainUrl=this.enterpriseUrl;
    const url=mainUrl+'/'+id;
    console.log("from getEnterpriseById:"+url);
    return this.http.get<Enterprise>(url);

  }
  getLogin(){
    const myUrl="http:/localhost:8080/login";
    console.log("entering login: "+myUrl);
    return this.http.get(myUrl);
  }

  getVersion(): Observable<VersionModel>{
    
    const myUrl=`${this.rootUrl}${authUrl}/version`;
//    const myUrl="http://localhost:8080/api/v1/auth/version"
    console.log("entering version module: "+myUrl);
    return this.http.get<VersionModel>(myUrl);
  }

  public addEnterprise(enterprise:Enterprise){
    return this.http.post(`${this.enterpriseUrl}`,enterprise);
  }
  public deleteEnterprise(id:number):Observable<Enterprise>{
    const url=`${this.enterpriseAdminUrl}/${id}`;
    return this.http.delete<Enterprise>(url,this.httpOptions).pipe(
      tap(_ => console.log (`deleted enterprise id=${id}`))
    );

  }
  public downloadFile(id:number,filename:string): Observable<any>{
    const url=`${this.enterpriseUrl}/${id}/filesystem`;
    console.log(`from enterprise.downloadFile url ${url}`)
    return this.http.get(url,{responseType: 'blob'}).pipe(
      tap(_ => console.log (`from enterprise.downloadFile pipe url ${url}`))

    );
  }

  public uploadFile(id:number,formData:FormData): Observable<any>{
    const url=`${this.enterpriseUrl}/${id}/filesystem`;
    console.log(`from enterprise.uploadFile url ${url}`)
    return this.http.post(url,formData).pipe(
      tap(_ => console.log (`from enterprise.upload pipe url ${url}`))
    );
  }

  findEnterpriseById(id:number):Observable<Enterprise>{
    console.log("Enterprise service: findEnterpriseById");
    const url=`${this.enterpriseUrl}/${id}`;
    return this.http.get<Enterprise>(url)
  }
}
