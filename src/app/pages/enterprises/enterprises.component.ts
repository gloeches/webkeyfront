import { Component } from '@angular/core';
import { Enterprise } from './enterprise';
//import {ENTERPRISES} from '../mock-enterprises'
import { EnterpriseService } from '../../services/enterprise.service';
import { Router } from '@angular/router';
import { KeypassService } from 'src/app/services/keypass.service';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent {
  
  enterprises: Enterprise[]=[];
  constructor(private router: Router,private enterpriseService: EnterpriseService, private keypassService:KeypassService,private confirmation:MessagesService){}
  selectedEnterprise?: Enterprise;
  _enterprise?:Enterprise;

  ngOnInit(): void {
    this.getEnterprises();
    console.log('inicializando');
 //   this.getLogin();
    
  }
  onSelect(enterprise: Enterprise):void {
    this.selectedEnterprise=enterprise;
    console.log ("click done "+this.selectedEnterprise.name+ "leaderProject: "+this.selectedEnterprise.projectLeader);
  }

  getEnterprises(): void {
    this.enterpriseService.getEnterprises().subscribe(enterprises => this.enterprises = enterprises);
  }
  getEnterprisesLikeName(_name:string):void{
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
    console.log(this.confirmation.confirmDialog('a'))



   // this.enterprises=this.enterprises.filter(h=>h!==enterprise);
   // this.enterpriseService.deleteEnterprise(enterprise.id).subscribe();
   // this._enterprise=enterprise;
  }

  
  


}
