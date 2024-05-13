import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { ResetService } from 'src/app/services/reset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  ngOnInit(): void {
    this.user.email='';
  }
  constructor(private http:HttpClient,private resetService:ResetService,private snack:MatSnackBar, private router:Router, private infoMessage:MessagesService) { }
  public user = {
    email : '',
    password : '',
    passwordConfirm : ''
  }
  public errorMessage:string=' ';
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  formSubmit() {
    if (this.user.password!==this.user.passwordConfirm){
      this.user.passwordConfirm=''
      this.errorMessage='Password match error';
    }
      
    else{
      console.log(this.user);
      if(this.user.email == '' || this.user.email == null){
        
        return;
      }
      if(this.user.password == '' || this.user.passwordConfirm == null){
        
        return;
      }
 
      this.resetUser();
        
      
    }
  }
  resetUser() {

    console.log('from resetUser function: ')
    console.log(this.user);
    this.resetService.resetPassword(this.user).subscribe({
      next: (userData) => {
         console.log('userData from subscribe:');
         console.log (userData); 
        },
      error: (errorData)=>{
        console.log("from Reset Component Backend can't replay to subcribe: ")
        console.error(errorData);
        this.infoMessage.SweetMessage("backend doesn't replay contact administrator")
      },
      complete: () => {
        console.info("Reset completo");
        this.router.navigateByUrl('/login');
      }
    }
  )
  }
}
