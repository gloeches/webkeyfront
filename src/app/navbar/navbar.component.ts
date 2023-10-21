import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExchangeDataService } from '../services/exchange-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoggedIn: Boolean=false;
  message:string="";
  subcription: Subscription = new Subscription;
  constructor(private data:ExchangeDataService){}
  ngOnInit(): void {
    this.subcription=this.data.CurrentMessage.subscribe(message => this.message=message);
    this.subcription=this.data.CurrentStatus.subscribe(status=>this.isLoggedIn=status);
  }
  
}
