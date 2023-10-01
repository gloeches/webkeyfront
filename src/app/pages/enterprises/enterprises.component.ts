import { Component } from '@angular/core';
import { Enterprise } from './enterprise';
//import {ENTERPRISES} from '../mock-enterprises'
import { EnterpriseService } from '../../services/enterprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent {
  
  enterprises: Enterprise[]=[];
  constructor(private router: Router,private enterpriseService: EnterpriseService){}
  selectedEnterprise?: Enterprise;
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
  ngOnInit(): void {
    this.getEnterprises();
    console.log('inicializando');
 //   this.getLogin();
    
  }
  


}
