import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }
  constructor(private snack:MatSnackBar) { }
  formSubmit(){
    this.snack.open('Acceso a sigup !!','Aceptar',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
  }
}
