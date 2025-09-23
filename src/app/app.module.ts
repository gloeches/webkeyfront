import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterprisesComponent } from './pages/enterprises/enterprises.component';
import { FormGroup, FormsModule } from '@angular/forms'; // <-- NgModel lives here
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
import { KeypassCreateComponent } from './pages/keypass-create/keypass-create.component';
import { TestFormgroupComponent } from './dev/test-formgroup/test-formgroup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitResetComponent } from './dev/submit-reset/submit-reset.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MessagesDialogComponent } from './messages/messages-dialog/messages-dialog.component';
import { HomeComponent } from './pages/home/home.component';
import { RoleComponent } from './pages/role/role/role.component';
import { ResetComponent } from './auth/reset/reset.component';
import { AppConfigService } from './services/app-config.service';
import { ConstantsService } from './shared/header/constants.service'; // <-- Import ConstantsService
import { HighlightPipe } from './shared/highlight.pipe';
import { APP_INITIALIZER } from '@angular/core';
import { tap } from 'rxjs/operators';

export function appInitializer(appConfigService: AppConfigService, constantsService: ConstantsService) {
  return () => appConfigService.loadAppConfig().pipe(
    // Use tap to populate the constants service after the config is loaded
    tap(config => {
      constantsService.load(config);
    })
  );
}


@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    EnterprisesComponent,
    MessagesComponent,
    LoginComponent,
    VersionComponent,
    NavbarComponent,
    HeaderComponent,
    SigupComponent,
    MainUserComponent,
    KeypasComponent,
    EnterpriseCreateComponent,
    KeypassCreateComponent,
    TestFormgroupComponent,
    MessagesDialogComponent,
    SubmitResetComponent,
    HomeComponent,
    RoleComponent,
    ResetComponent
  
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    authInterceptorProviders,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      // Add ConstantsService to the dependencies array
      deps: [AppConfigService, ConstantsService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
