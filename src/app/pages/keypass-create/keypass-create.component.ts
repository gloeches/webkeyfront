import { Component } from '@angular/core';
import { Keypass } from '../keypass/keypass';
import { KeypassService } from 'src/app/services/keypass.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keypass-create',
  templateUrl: './keypass-create.component.html',
  styleUrls: ['./keypass-create.component.css']
})
export class KeypassCreateComponent {
  public enterpriseId:number=0;
  public keypass:Keypass={
    id:0,
    username:'',
    password:'',
    notes:''
  }

  constructor(private snack:MatSnackBar,private router:Router,private route: ActivatedRoute,private keypassService:KeypassService) { }
  ngOnInit(): void {
    this.enterpriseId=this.route.snapshot.params['id'];
    console.log('keypass component: OnInit params: ', this.enterpriseId ,' selected');
  }
  formSubmit(){
    console.log("from keypass-create component: click formSubmit ")
    if(this.keypass.username == ''){
      this.snack.open('El nombre del usuario es obligatorio !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    this.keypassService.addKeypass(this.enterpriseId, this.keypass).subscribe((res:any) => {
      console.log('keypass created successfully: '+ res.username);
    })

    this.snack.open('Claves insrtadas adecuadamene !!','Aceptar',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
    this.keypass.username="another user?";
    this.keypass.notes='';
    this.keypass.password='';
    //  this.router.navigateByUrl('/version');
    
  }

  


}