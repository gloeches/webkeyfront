import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service'
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginData = {
    "email" : '',
    "password" : '',
  }
  private loginError ='';
  message: string="";
  loginStatus:boolean=false;
  private subscription: Subscription = new Subscription;
  private subscriptionStatus: Subscription=new Subscription;
  public showPassword: boolean = false;
  constructor(private notifica:MessagesService,private loginService:LoginService,private router:Router,  private data:ExchangeDataService,private infoMessage:MessagesService ) { }
  ngOnInit(): void {
    this.subscription=this.data.CurrentMessage.subscribe(message => this.message = message)
    this.subscriptionStatus=this.data.CurrentStatus.subscribe(status => this.loginStatus=status )
  }

  formSubmit(){
    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null){
            return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
     
      return;
    }
    this.loginService.cleanToken();
    this.loginService.generateToken(this.loginData).subscribe({
      next: (userData) => {
         console.log('userData from subscribe:');
         console.log (userData); 
         this.loginService.setUser (userData);   },
      error: (errorData)=>{
        console.log("Backend can't replay to subcribe: ")
        console.error(errorData);
        this.loginError=errorData;
        this.infoMessage.SweetMessage("backend doesn't replay contact administrator")
        this.handleError(errorData);
      },
      complete: () => {
        console.info("Login completo");
        this.enviaMensaje();
        this.changeStatus(true);
        this.router.navigateByUrl('/enterprises');
      }
    }
 
    )
    
  } 

  private handleError(error: HttpErrorResponse) {
    console.log("Entering handleError");
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        const errorMessage= 'Access error check user and password';
        this.infoMessage.SweetMessage(errorMessage);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  enviaMensaje(){
    console.log("enviado mensaje");
    this.data.changeMessage("Enviado Mensaje");


  }
  changeStatus(status:boolean){
    console.log("change login status to "+status);
    this.data.changeStatus(status);
  }
  goToRegister(){
    this.router.navigateByUrl("/sigup");
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  ResetPassword(){
    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null){
      return;
    }
    this.notifica.SweetMessage(`Check your Email: ${this.loginData.email} for Reset password notification`);
    this.loginService.resetPassword(this.loginData.email).subscribe();
  }
}


