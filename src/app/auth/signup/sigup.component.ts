import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';


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
 
  constructor(private http:HttpClient,private signupService:SignupService,private snack:MatSnackBar, private router:Router) { }
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
