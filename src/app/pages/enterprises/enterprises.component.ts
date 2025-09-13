import { Component } from '@angular/core';
import { Enterprise } from './enterprise';
//import {ENTERPRISES} from '../mock-enterprises'
import { EnterpriseService } from '../../services/enterprise.service';
import { Router } from '@angular/router';
import { KeypassService } from 'src/app/services/keypass.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Observable, Subscription } from 'rxjs';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
import Swal from 'sweetalert2';
import { ExchangeDataService } from  '../../services/exchange-data.service';


@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent {
  isLoggedIn: Boolean=false;
  message:string="";
  subcription: Subscription = new Subscription;
  enterprises: Enterprise[]=[];
  constructor(private router: Router,private enterpriseService: EnterpriseService, private keypassService:KeypassService,private confirmation:MessagesService,private data:ExchangeDataService){}
  selectedEnterprise?: Enterprise;
  _enterprise?:Enterprise;
   searchTerm: string = '';

  ngOnInit(): void {
    this.getEnterprises();
    console.log('inicializando');
 //   this.getLogin();
    this.subcription=this.data.CurrentMessage.subscribe(message => this.message=message);
    this.subcription=this.data.CurrentStatus.subscribe(status=>this.isLoggedIn=status);
    
  }
  onSelect(enterprise: Enterprise):void {
    this.selectedEnterprise=enterprise;
    console.log ("click done "+this.selectedEnterprise.name+ "leaderProject: "+this.selectedEnterprise.projectLeader);
  }

  getEnterprises(): void {
    this.enterpriseService.getEnterprises().subscribe(enterprises => this.enterprises = enterprises);
  }
  getEnterprisesLikeName(_name:string):void{
     this.searchTerm = _name;
    this.enterpriseService.getEnterpriseLikeName(_name).subscribe(enterprises => this.enterprises = enterprises);
  }
  
  getLogin():void{
    this.enterpriseService.getLogin();

  }
  createEnterprise():void{
    this.router.navigateByUrl('/enterpriseCreate');
   
  }

  deleteEnterprise(enterprise:Enterprise):void{
    let testMessagesService:MessagesService;
    console.log("click delete enterprise ");
//    console.log(this.confirmation.confirmDialog('a'))
//    const result=confirm(`Do you really want to delete ${enterprise.name} company?` );
    Swal.fire({
      title: `Do you really want to delete ${enterprise.name} company?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        console.log(`user confirmed to delete ${enterprise.name} company `);
        this.enterpriseService.deleteEnterprise(enterprise.id).subscribe({
          next: ()=>{
            console.log(`succesfull deletion ${enterprise.name} company `);
            this.enterprises=this.enterprises.filter(h=>h!==enterprise);
          },
          error:(errorData)=>{
            console.log("Backend deny access");
            
            this.confirmation.SweetMessage("this user is not authorized to do this action")
          }
        });
        this._enterprise=enterprise;
        
        
      } else  {
        console.log(`user has decided to cancel de deletion ${enterprise.name}`)
      }
    });
  }
  downloadFile(id:number,filename:string):void{
    this.enterpriseService.downloadFile(id,filename)
    .subscribe(blob => {
      filesaver:FileSaver;
      FileSaver.saveAs(blob,filename)
    });
  }


  
  


}
