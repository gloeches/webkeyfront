import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/model/login.model';
import { LoginService } from 'src/app/services/login.service';
import { MainUserService } from 'src/app/services/main-user.service';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  public myToken:any='';
  public retorno:any='';
  private loginError='';
  public loginData:LoginModel;
  constructor(private snack:MatSnackBar,private mainUserService:MainUserService,private router:Router) {
    this.loginData = new LoginModel("","");
    this.myToken=this.mainUserService.getToken();
    console.log('entering ngOnInit from mainUser component');
    console.log(this.myToken);
    this.mainUserService.accessApi().subscribe({
      next: (userData:LoginModel) => {
         console.log('userData');
         console.log (userData); 
         this.loginData.email=userData.email;
          },
      error: (errorData)=>{
        console.error(errorData);
        this.loginError=errorData;
      },
      complete: () => {
        console.info("TestAPI completo");
        
      }
    })
   }
  ngOnInit(): void {
   
  }

  

 



}
