import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {

  public user = {
    firstName : '',
    lastName : '',
    email : '',
    password : ''
  }
  private baserUrl='http://localhost:8080';
  private loginError:string="";
  public showPassword: boolean = false;
  public isAgilent:boolean=false;
 
  constructor(private http:HttpClient,private signupService:SignupService,private snack:MatSnackBar, private router:Router, private message:MessagesService) { }
  formSubmit(){
    console.log(this.user);
    if(this.user.email == '' || this.user.email == null){
      this.snack.open('Missing Email information !!','Ok',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    if(this.user.password == '' || this.user.password == null){
      this.snack.open('Missing Password information !!','Ok',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    this.signupService.checkAgilent(this.user).subscribe({
      next: (userData) =>{
        console.log("checkAgilent next");
        this.isAgilent=true;
        this.addUser();
      },
      error: (errorData) =>{
        console.log("Agilent error")
        this.message.ScreeMessage("This user is not authorized Please contact administrators");
        this.isAgilent=false
      },
      complete:() =>{
        console.log(`exit check agilent variable isAgilent ${this.isAgilent}`)
      }
    });
   // if (this.isAgilent==false) return;

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public addUser():void{
    
      console.log(`entering isAgilen if variable isAgilent ${this.isAgilent}`)
        this.signupService.añadirUsuario(this.user).subscribe({
          next: (userData) => {
            console.log(userData);
          },
          error: (errorData)=>{
            console.error(errorData);
            this.loginError=errorData;
            this.snack.open('Forbidden action !!','Ok',{
              duration : 3000,
              verticalPosition : 'top',
              horizontalPosition : 'right'
            });
          },
          complete: () => {
            console.info("Signup completo");
            this.router.navigateByUrl('/');
          }
        }
      
   
      )
     }
     
  
}
