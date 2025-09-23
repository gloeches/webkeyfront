import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

// This interface defines the shape of our configuration
export interface IAppConfig {
  rootUrl: string;
  emailUrl: string;
  frontendUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig?: IAppConfig;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get<IAppConfig>('/assets/config/config.json')
      .pipe(
        tap(config => {
          this.appConfig = config;
        })
      );
  }

  getConfig(): IAppConfig {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    console.log("AppConfigService returning config:");
    console.log(this.appConfig);  
    return this.appConfig;
  }
}