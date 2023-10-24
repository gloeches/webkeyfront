import { Component, OnInit } from '@angular/core';
import { Enterprise } from '../enterprises/enterprise';
import { Keypass } from './keypass';
import { ActivatedRoute, Router } from '@angular/router';
import { KeypassService } from 'src/app/services/keypass.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-keypas',
  templateUrl: './keypas.component.html',
  styleUrls: ['./keypas.component.css']
})

export class KeypasComponent implements OnInit{
  id:number=1;
  enterprise: Enterprise = {
    id: 0,
    name: 'test',
    projectLeader: ''
  };
  keypasses: Keypass []=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private keypassService: KeypassService,
    private enterpriseService: EnterpriseService,
    ){ }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log('keypass component: OnInit params: ', this.id ,' selected');
    this.getEnterpriseById();
    this.getKeypasses();
  }
  getKeypasses(): void {
    this.keypassService.findAllKeypassByEnterpriseId(this.id).subscribe(keypasses => this.keypasses = keypasses);
  }
  getEnterpriseById(): void{
    this.enterpriseService.getEnterpriseById(this.id).subscribe(_enterprise => this.enterprise = _enterprise);
    console.log("from keyPassComponent: "+this.enterprise.name);
  }

  deleteKeypass(keypass: Keypass){
    let testMessagesService:MessagesService;
    console.log("click delete keypass ");
//    console.log(this.confirmation.confirmDialog('a'))
    const result=confirm(`Do you really want to delete ${keypass.username} key?` );
    if (result) {
      this.keypasses=this.keypasses.filter(h=>h!==keypass);
      this.keypassService.deleteKeypass(keypass.id).subscribe();
      console.log(`user confirmed to delete ${keypass.username} company `);
    }
    else {
      console.log(`user has decided to cancel de deletion ${keypass.username}`)
    }
  }
} 
