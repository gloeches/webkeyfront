import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EnterprisesComponent } from './pages/enterprises/enterprises.component';
import { VersionComponent } from './version/version.component';
import { SigupComponent } from './auth/signup/sigup.component';
import { MainUserComponent } from './pages/main-user/main-user.component';
import { KeypasComponent } from './pages/keypass/keypas.component';
import { EnterpriseCreateComponent } from './pages/enterprise-create/enterprise-create.component';
import { KeypassCreateComponent } from './pages/keypass-create/keypass-create.component';
import { TestFormgroupComponent } from './dev/test-formgroup/test-formgroup.component';
import { HomeComponent } from './pages/home/home.component';
import { ResetComponent } from './auth/reset/reset.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'enterprises', component: EnterprisesComponent},
  {path: 'enterprises/:id/keypass/:message', component: KeypasComponent},
  {path: 'enterprises/:id/createkeypass/:idk', component: KeypassCreateComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'version', component: VersionComponent},
  {path: 'main-user', component: MainUserComponent},
  {path: 'enterpriseCreate', component: EnterpriseCreateComponent},
  {path: 'enterprises/:id',component: EnterpriseCreateComponent},
  {path: 'testformgroup', component: TestFormgroupComponent},
  {path: 'sigup' , component:SigupComponent},
  {path: 'reset/:email' , component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
