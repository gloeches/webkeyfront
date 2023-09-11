import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginData = {
    "username" : '',
    "password" : '',
  }
  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router) { }
  ngOnInit(): void {
  }

  formSubmit(){
    this.snack.open('formSubmit ejecutado !!','Aceptar',{
      duration:3000
    })
    
  }

}
