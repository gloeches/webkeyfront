import { Component } from '@angular/core';
import { Keypass } from '../keypass/keypass';
import { KeypassService } from 'src/app/services/keypass.service';
import {MatSelectModule} from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-keypass-create',
  templateUrl: './keypass-create.component.html',
  styleUrls: ['./keypass-create.component.css']
})
export class KeypassCreateComponent {
  public enterpriseId:number=0;
  public keypassId:number=0;
  public enterpriseName!: Observable<string>;
  public enterpriseNameString: string='';
  public keypass:Keypass={
    id:0,
    username:'',
    password:'',
    notes:'',
    usertype:''
  }

  constructor(private snack:MatSnackBar,private router:Router,private route: ActivatedRoute,private keypassService:KeypassService, private messageService:MessagesService) { }
  ngOnInit(): void {
    this.enterpriseId=this.route.snapshot.params['id'];
    this.keypassId=this.route.snapshot.params['idk'];
    this.enterpriseName=this.route.queryParams
      .pipe(map(p => p['enterpriseName']))
    this.enterpriseName.subscribe(parametro => this.enterpriseNameString=parametro)
    console.log("params: "+ this.enterpriseNameString);
    

      
    console.log('keypass component: OnInit params: ', this.enterpriseId ,' selected:',this.keypassId);
    if (this.keypassId!=0) {
      this.keypassService.findKeypassById(this.keypassId).subscribe(_keypass => this.keypass = _keypass)
      this.keypass.notes="editar"
      this.keypass.id=this.keypassId;
      console.log("createKeypass in edit mode: ");
    }
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
      console.log('user_type: '+ res.user_type);
      this.messageService.ScreeMessage ('Keys properly inserted !!');
      if(this.keypassId!=0){
        this.router.navigateByUrl(`enterprises/${this.enterpriseId}/keypass`);
      }
      else{
  
      
      this.keypass.username="another user?";
      this.keypass.notes='';
      this.keypass.password='';
      //  this.router.navigateByUrl('/version');
      }

    })

    
    
  }

  onBack(){
    console.log("return to enterprises")
    this.router.navigateByUrl('/enterprises');
  }

  


}
