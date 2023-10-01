import { Component, OnInit } from '@angular/core';
import { Enterprise } from '../enterprises/enterprise';
import { Keypass } from './keypass';
import { ActivatedRoute, Router } from '@angular/router';
import { KeypassService } from 'src/app/services/keypass.service';

@Component({
  selector: 'app-keypas',
  templateUrl: './keypas.component.html',
  styleUrls: ['./keypas.component.css']
})

export class KeypasComponent implements OnInit{
  id:number=1;
  enterprise!: Enterprise; 
  keypasses: Keypass []=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private keypassService: KeypassService
    ){ }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log('keypass component: OnInit params: ', this.id ,' selected');
    this.getKeypasses();
  }
  getKeypasses(): void {
    this.keypassService.findAllKeypassByEnterpriseId(this.id).subscribe(keypasses => this.keypasses = keypasses);
  }
}
