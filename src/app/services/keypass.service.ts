import { Injectable } from '@angular/core';
import { apiUrl, rootUrl } from '../shared/header/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map,tap, catchError, of } from 'rxjs';
import { Keypass } from '../pages/keypass/keypass';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class KeypassService {
private apiURL=`${rootUrl}${apiUrl}`;
private fullApiURL="";
httpOptions={
  
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
  constructor(private httpCliente:HttpClient, private messageService: MessagesService) { }

  private log(message: string){
    this.messageService.add(`MessageService: ${message}`);
  }

  private handleError<T>(operation ='operation', result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  findKeypassById(id:number):Observable<Keypass>{
    console.log("keypass service: findKeypassById");
    this.fullApiURL=this.apiURL+"/keypass/"+id;
    return this.httpCliente.get<Keypass>(this.fullApiURL)
  }
  findAllKeypassByEnterpriseId(id:number):Observable<Keypass[]>{
    console.log ('findAllKeypassByEnterpriseId collecting data');
     this.fullApiURL=this.apiURL+'/enterprises/'+id+'/keypass'
    console.log(this.fullApiURL)
    return this.httpCliente.get<Keypass[]>(this.apiURL+'/enterprises/'+id+'/keypass')
  }

  findLimitedKeypassByEnterpriseId(id:number):Observable<Keypass[]>{
    console.log ('findLimitedKeypassByEnterpriseId collecting data');
     this.fullApiURL=this.apiURL+'/enterprises/'+id+'/limitedkeypass'
    console.log(this.fullApiURL)
    return this.httpCliente.get<Keypass[]>(this.apiURL+'/enterprises/'+id+'/limitedkeypass')
  }
  addKeypass(id:number,keypass:Keypass):Observable<Keypass>{
    return this.httpCliente.post<Keypass>(this.apiURL+'/enterprises/'+id+'/keypass', keypass).pipe(
      tap((_keypass: Keypass)=> this.log(`added hero w/ id={_keypass.id}`)),
      catchError(this.handleError<Keypass>('addkeypass'))
    )
  }
  public deleteKeypass(id:number):Observable<Keypass>{
    this.fullApiURL=`${this.apiURL}/admin/keypass/${id}`;
    console.log(`deleteKeypass url: ${this.fullApiURL}`);
    return this.httpCliente.delete<Keypass>(this.fullApiURL).pipe(
      tap(_=>console.log(`deleted keypass id=${id}`))
    );
//    return this.http.delete<Enterprise>(url,this.httpOptions).pipe(
//    tap(_ => console.log (`deleted enterprise id=${id}`))
 //   );

  }
}
