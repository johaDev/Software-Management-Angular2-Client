import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Company } from '../../../../../company';
import { CompanyEnvironment } from '../../../companyenvironment';
import { CompanyEnvironmentHardwareItem } from '../companyenvironmenthardware';
import { CompaniesService } from '../../../../../companies.service';

@Component({
  selector: 'app-company-environment-hardware-item',
  templateUrl: './company-environment-hardware-item.component.html',
  styleUrls: ['./company-environment-hardware-item.component.css']
})
export class CompanyEnvironmentHardwareItemComponent implements OnInit {

  company: Company;
  companyenvironment: CompanyEnvironment;
  hardwareitem: CompanyEnvironmentHardwareItem;
  companyId: string;
  environmentId: string;
  hardwareId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CompaniesService) { }

  ngOnInit() {
    this.route.params.map(params => [params['companyId'], params['environmentId'], params['hardwareId']])
      .subscribe(([companyId, environmentId, hardwareId]) => {
        this.getCompanyEnvironmentHardware(companyId, environmentId, hardwareId);
      });
  }

// this could be done directly from the company, but want to have the service decide on caching, when to retrieve what, etc. in the future?
  getCompanyEnvironmentHardware(companyId: string, environmentId: string, hardwareId: string): void {
    if (companyId && environmentId && hardwareId) {
      this.companyId = companyId;
      this.environmentId = environmentId;
      this.hardwareId = hardwareId;
      this.service.getCompanyEnvironmentHardware(companyId, environmentId, hardwareId).then(companyEnvironmentHardware => this.hardwareitem = companyEnvironmentHardware);
      this.service.getCompany(companyId).then(company => this.company = company);
    }
  }
}
