import { Component } from '@angular/core';
import { EnterpriseService } from '../enterprise.service';
import { VersionModel } from '../model/version';
@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  public version: VersionModel;
  
  
  constructor(private enterpriseService: EnterpriseService){
    this.version = new VersionModel();    
    this.getVersion()};

  getVersion():void{
    this.enterpriseService.getVersion().subscribe((res)=>{
                            this.version.versionDate=res.versionDate;
                            this.version.versionContent=res.versionContent;
                            console.log("getversion method has returned: ");
                            console.log(this.version);
                            console.log(" from backend")
    })
   
  }



}
