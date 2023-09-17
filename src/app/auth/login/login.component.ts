import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service'
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
  private loginError='';
  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router) { }
  ngOnInit(): void {
  }
/*  formSubmit(){
    this.snack.open('formExecute click !!','Aceptar',{
      duration:3000
    })
  }
  */
 
  formSubmit(){
    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe({
      next: (userData) => {
         console.log('userData');
         console.log (userData); 
          this.loginService.setUser (userData);   },
      error: (errorData)=>{
        console.error(errorData);
        this.loginError=errorData;
      },
      complete: () => {
        console.info("Login completo");
        this.router.navigateByUrl('/main-user');
      }
    }
 
    )
    
  } 

}
