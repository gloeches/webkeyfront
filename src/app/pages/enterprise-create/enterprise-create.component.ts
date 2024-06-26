import { Component } from '@angular/core';
import { Enterprise } from '../enterprises/enterprise';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { MessagesService } from 'src/app/services/messages.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enterprise-create',
  templateUrl: './enterprise-create.component.html',
  styleUrls: ['./enterprise-create.component.css']
})
export class EnterpriseCreateComponent {
  enterprise: Enterprise = {
    id: 0,
    name: '',
    projectLeader: '',
    other_information:'',
    filePath:''
  };
  fileName='';
  subcription: Subscription = new Subscription;
  role:String ='';
  formData=new FormData();
  constructor(private message:MessagesService,private router:Router,private route: ActivatedRoute,private enterpriseServie:EnterpriseService,private data:ExchangeDataService) { }
  ngOnInit(): void {
    this.enterprise.id=this.route.snapshot.params['id'];
    if (!this.enterprise.id) this.enterprise.id=0;
    console.log('Enterprise-create component: OnInit params: ', this.enterprise.id );
    if (this.enterprise.id!=0) {
      this.enterpriseServie.findEnterpriseById(this.enterprise.id).subscribe(_enterprise => this.enterprise = _enterprise)
      console.log("enterprise-create in edit mode: ");
    }
    this.subcription=this.data.CurrentMessage.subscribe(message => this.role=message);
  }
  formSubmit(){
    console.log("click formSubmit ")
    if(this.enterprise.name == '' || this.enterprise.projectLeader== ''){
      this.message.SweetMessage('Missing information in the form !!');
      return;
    }
   // this.enterpriseServie.addEnterprise(this.enterprise).subscribe((res:any) => {
    //
    //console.log('Enterprise created successfully: '+ res.name);
    //})
    this.enterpriseServie.addEnterprise(this.enterprise).subscribe({
      next: (_enterprise:any)=>{this.enterprise.id=_enterprise.id
        
        console.log('Enterprise created successfully: '+ _enterprise.name)
        this.message.SweetMessage('Enterprise inserte/updated properly !!');
      },
      error: (errorData)=>{
        console.log(errorData)
      },
      complete: ( )=>{
        
        console.info("created enterprise process completed")
        if (this.formData.has("image")){

        
          this.enterpriseServie.uploadFile(this.enterprise.id, this.formData).subscribe({
            next: (_enterprise:Enterprise) => {
            console.log(`Enterprise-create comp onFileSelect id:  ${_enterprise.name}`)
            },
          
            error: (errorData)=>{
              console.log(`Enterprise-create comp onFileSelect error: ${errorData}`)
            } 
          })
        }
        this.router.navigateByUrl('/enterprises');
      }

    })
    
  }
  onFileSelected(event:any){
    console.log("Enterprise-create componente: onFileSelected ")
    const file:File = event.target.files[0];
    if (file){
      this.fileName=file.name;
 //     const formData=new FormData();
      this.formData.append("image",file);
 /*     this.enterpriseServie.uploadFile(this.enterprise.id, this.formData).subscribe({
        next: (_enterprise:Enterprise) => {
        console.log(`Enterprise-create comp onFileSelect id:  ${_enterprise.name}`)
        },
      
        error: (errorData)=>{
          console.log(`Enterprise-create comp onFileSelect error: ${errorData}`)
        } 
      })
*/

    }
  }
  ToPasswords(){
    console.log(`enterprises/${this.enterprise.id}/keypass/${this.role}`);
    this.router.navigateByUrl(`enterprises/${this.enterprise.id}/keypass/${this.role}`);
  }

}
