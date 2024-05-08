import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { apiUrl, rootUrl } from 'src/app/shared/header/constants';
import { authUrl }  from 'src/app/shared/header/constants';
import { UsuarioModel } from '../model/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) { }

  public getRole(){
    console.log(`${rootUrl}${apiUrl}/role`);
    return this.httpClient.get<UsuarioModel>(`${rootUrl}${apiUrl}/role`);
  }
}
