import { Component } from '@angular/core';
import { Enterprise } from '../enterprises/enterprise';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseService } from 'src/app/services/enterprise.service';

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
    other_information:''
  };
  constructor(private snack:MatSnackBar,private router:Router,private route: ActivatedRoute,private enterpriseServie:EnterpriseService) { }
  ngOnInit(): void {
    this.enterprise.id=this.route.snapshot.params['id'];
    console.log('Enterprise-create component: OnInit params: ', this.enterprise.id );
    if (this.enterprise.id!=0) {
      this.enterpriseServie.findEnterpriseById(this.enterprise.id).subscribe(_enterprise => this.enterprise = _enterprise)
      console.log("enterprise-create in edit mode: ");
    }
  }
  formSubmit(){
    console.log("click formSubmit ")
    if(this.enterprise.name == '' || this.enterprise.projectLeader== ''){
      this.snack.open('Missing information in the form !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
   // this.enterpriseServie.addEnterprise(this.enterprise).subscribe((res:any) => {
    //
    //console.log('Enterprise created successfully: '+ res.name);
    //})
    this.enterpriseServie.addEnterprise(this.enterprise).subscribe({
      next: (_enterprise:any)=>{
        
        console.log('Enterprise created successfully: '+ _enterprise.name)
        this.snack.open('Enterprise inserted properly !!','Ok',{
          duration : 3000,
          verticalPosition : 'top',
          horizontalPosition : 'right'
        });
      },
      error: (errorData)=>{
        console.log(errorData)
      },
      complete: ( )=>{
        
        console.info("created enterprise process completed")
        
        this.router.navigateByUrl('/enterprises');
      }

    })
    
  }

}
