import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Company } from '../../../../../company';
import { CompanyEnvironment } from '../../../companyenvironment';
import { Database } from '../database';
import { CompaniesService } from '../../../../../companies.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  company: Company;
  companyenvironment: CompanyEnvironment;
  database: Database;
  companyId: string;
  environmentId: string;
  databaseId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CompaniesService) { }

  ngOnInit() {
    this.route.params.map(params => [params['companyId'], params['environmentId'], params['databaseId']])
      .subscribe(([companyId, environmentId, databaseId]) => {
        this.getDatabase(companyId, environmentId, databaseId);
      });
  }

// this could be done directly from the company, but want to have the service decide on caching, when to retrieve what, etc. in the future?
  getDatabase(companyId: string, environmentId: string, databaseId: string): void {
    if (companyId && environmentId && databaseId) {
      this.companyId = companyId;
      this.environmentId = environmentId;
      this.databaseId = databaseId;
      this.service.getCompanyEnvironmentDatabase(companyId, environmentId, databaseId)
      .then(database => this.database = database);
      this.service.getCompany(companyId).then(company => this.company = company);
    }
  }
}