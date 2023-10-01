import { Injectable } from '@angular/core';
import { apiUrl, rootUrl } from '../shared/header/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Keypass } from '../pages/keypass/keypass';

@Injectable({
  providedIn: 'root'
})
export class KeypassService {
private apiURL=`${rootUrl}${apiUrl}`;
private fullApiURL="";
  constructor(private httpCliente:HttpClient) { }
  findAllKeypassByEnterpriseId(id:number):Observable<Keypass[]>{
    console.log ('findAllKeypassByEnterpriseId collecting data');
     this.fullApiURL=this.apiURL+'/enterprises/'+id+'/keypass'
    console.log(this.fullApiURL)
    return this.httpCliente.get<Keypass[]>(this.apiURL+'/enterprises/'+id+'/keypass')
     
    
  }
}
