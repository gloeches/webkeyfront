import { Component } from '@angular/core';
import { EnterpriseService } from '../services/enterprise.service';
import { VersionModel } from '../model/version';
import { ConstantsService } from '../shared/header/constants.service'; // <-- 1. Import ConstantsService

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  public version: VersionModel;
  // 2. Add properties to hold config values
  public rootUrl: string;
  public emailUrl: string;
  public frontendUrl: string;

  // 3. Inject ConstantsService
  constructor(private enterpriseService: EnterpriseService, private constants: ConstantsService) {
    this.version = new VersionModel();
    this.getVersion();

    // 4. Assign values from the service
    this.rootUrl = this.constants.rootUrl;
    this.emailUrl = this.constants.emailUrl;
    this.frontendUrl = this.constants.frontendUrl;
  }

  getVersion(): void {
    this.enterpriseService.getVersion().subscribe((res) => {
      this.version.versionDate = res.versionDate;
      this.version.versionContent = res.versionContent;
      console.log("getversion method has returned: ");
      console.log(this.version);
      console.log(" from backend")
    })
  }
}
