import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductVersion } from '../productversion';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-productversion',
  templateUrl: './productversion.component.html',
  styleUrls: ['./productversion.component.css']
})
export class ProductVersionComponent implements OnInit {
  productversion: ProductVersion;
  productGuid: string;
  versionGuid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService) { }

  ngOnInit() {
    this.route.parent.params.switchMap((params: Params) => this.productGuid = params['productId']).subscribe(s => this.getProductVersion());
    this.route.params.switchMap((params: Params) => this.versionGuid = params['productVersionId']).subscribe(s => this.getProductVersion());
  }

  getProductVersion(): void {
    if (this.productGuid && this.versionGuid) {
      this.service.getProductVersion(this.productGuid, this.versionGuid).then(productVersion => this.productversion = productVersion);
    }
  }
}
