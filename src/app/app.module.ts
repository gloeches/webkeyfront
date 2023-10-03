import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterprisesComponent } from './pages/enterprises/enterprises.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule} from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './auth/login/login.component';
import { VersionComponent } from './version/version.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './shared/header/header.component';
import { SigupComponent } from './auth/signup/sigup.component';
import { authInterceptorProviders } from './services/auth-interceptor.service';
import { MainUserComponent } from './pages/main-user/main-user.component';
import { KeypasComponent } from './pages/keypass/keypas.component';
import { EnterpriseCreateComponent } from './pages/enterprise-create/enterprise-create.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterprisesComponent,
    MessagesComponent,
    LoginComponent,
    VersionComponent,
    NavbarComponent,
    HeaderComponent,
    SigupComponent,
    MainUserComponent,
    KeypasComponent,
    EnterpriseCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
