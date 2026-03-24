import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UsuarioModel } from '../model/usuario-model';
import { ConstantsService } from '../shared/header/constants.service'; // <-- 1. Import ConstantsService
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient, private constants: ConstantsService) { }

  public getRole(){
    console.log(`${this.constants.rootUrl}${this.constants.apiUrl}/role`);
    return this.httpClient.get<UsuarioModel>(`${this.constants.rootUrl}${this.constants.apiUrl}/role`);
  }
}
