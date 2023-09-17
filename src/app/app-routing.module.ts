import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { VersionComponent } from './version/version.component';
import { SigupComponent } from './auth/signup/sigup.component';
import { MainUserComponent } from './pages/main-user/main-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'enterprises', component: EnterprisesComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'version', component: VersionComponent},
  {path: 'main-user', component: MainUserComponent},
  {path: 'sigup' , component:SigupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
