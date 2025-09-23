import { Injectable } from '@angular/core';
import { IAppConfig } from 'src/app/services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  // Properties to hold the values
  rootUrl = '';
  emailUrl = '';
  frontendUrl = '';

  // Hardcoded values can remain
  readonly authUrl = '/api/v1/auth';
  readonly apiUrl = '/api/v1';

  constructor() { }

  // A method to load the dynamic values from the main config
  load(config: IAppConfig) {
    this.rootUrl = config.rootUrl;
    this.emailUrl = config.emailUrl;
    this.frontendUrl = config.frontendUrl;
  }
}