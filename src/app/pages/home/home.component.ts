import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(environment.production);
    console.log("entering home component "+environment.constante);
  }

  sendToLogin(){
    this.router.navigateByUrl('/login');
  }
  sendToSignup(){
    this.router.navigateByUrl('/sigup');
  }
}
