import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Company } from '../../company';
import { RenameCompanyCommand } from '../company.commands';
import { CompaniesService } from '../../companies.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company;
  previousCompany: Company;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CompaniesService
  ) { }

  ngOnInit() {
    this.route.parent.params.switchMap((params: Params) => this.service.getCompany(params['companyId']))
      .subscribe((company: Company) => this.update(company));
  }

  update(newValue: Company) {
    if (newValue) {
      this.previousCompany = newValue.clone();
      this.company = newValue;
    }
  }

  changeName(): void {
    if (this.previousCompany !== undefined) {
      if (this.company.name !== this.previousCompany.name) {
        const renameCommand = new RenameCompanyCommand(this.company, this.previousCompany.name);
        this.service.postCommand(renameCommand, false);
        this.previousCompany.name = this.company.name;
      }
    } else {
      this.previousCompany = this.company;
    }
  }
}
