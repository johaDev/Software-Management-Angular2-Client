import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactDetailsComponent } from './contacts/contact/contactdetails/contactdetails.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyDetailsComponent } from './companies/company/companydetails/companydetails.component';
import { CompanyRolesComponent } from './companies/company/companyroles/companyroles.component';
import { CompanyRoleComponent } from './companies/company/companyroles/companyrole/companyrole.component';
import { CompanyEnvironmentsComponent } from './companies/company/companyenvironments/companyenvironments.component';
import { CompanyEnvironmentComponent } from './companies/company/companyenvironments/companyenvironment/companyenvironment.component';
import { CompanyEnvironmentDetailsComponent } from './companies/company/companyenvironments/companyenvironment/companyenvironmentdetails/companyenvironmentdetails.component';
import { LoginComponent } from './admin/login/login.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailsComponent } from './projects/project/projectdetails/projectdetails.component';
import { ProjectRolesComponent } from './projects/project/projectroles/projectroles.component';

import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyComponent } from './technologies/technology/technology.component';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

import { ProductVersionsComponent } from './products/productversions/productversions.component';
import { ProductVersionComponent } from './products/productversions/productversion/productversion.component';
import { ProductVersionDetailsComponent } from './products/productversions/productversion/productversiondetails/productversiondetails.component';
import { ProductDetailsComponent } from './products/product/productdetails/productdetails.component';
import { ProductFeaturesComponent } from './products/productfeatures/productfeatures.component';
import { ProductFeatureComponent } from './products/productfeatures/productfeature/productfeature.component';

import { DesignsComponent } from './designs/designs.component';
import { DesignComponent } from './designs/design/design.component';
import { DesignDetailsComponent } from './designs/design/designdetails/designdetails.component';
import { DesignElementsComponent } from './designs/design/designelements/designelements.component';
import { EpicElementsComponent } from './designs/design/epic-elements/epic-elements.component';
import { EpicElementComponent } from './designs/design/epic-elements/epic-element/epic-element.component';
import { EpicElementDetailsComponent } from './designs/design/epic-elements/epic-element/epic-element-details/epic-element-details.component';
import { EntityElementsComponent } from './designs/design/entity-elements/entity-elements.component';
import { EntityElementComponent } from './designs/design/entity-elements/entity-element/entity-element.component';
import { EntityElementDetailsComponent } from './designs/design/entity-elements/entity-element/entity-element-details/entity-element-details.component';
import { PropertyElementsComponent } from './designs/design/property-elements/property-elements.component';
import { PropertyElementComponent } from './designs/design/property-elements/property-element/property-element.component';
import { PropertyElementDetailsComponent } from './designs/design/property-elements/property-element/property-element-details/property-element-details.component';
import { CommandElementsComponent } from './designs/design/command-elements/command-elements.component';
import { CommandElementComponent } from './designs/design/command-elements/command-element/command-element.component';
import { CommandElementDetailsComponent } from './designs/design/command-elements/command-element/command-element-details/command-element-details.component';

import { LinksComponent } from './links/links.component';
import { LinkComponent } from './links/link/link.component';
import { LinkDetailsComponent } from './links/link/linkdetails/linkdetails.component';

import { EmploymentsComponent } from './employments/employments.component';

import { PageNotFoundComponent } from './not-found.component';

const linksSubRoute = {
  path: 'links/:forId',
  component: LinksComponent,
  children: [
    {
      path: ':linkId',
      component: LinksComponent,
      children: [
        {
          path: 'details',
          component: LinkDetailsComponent
        }
      ]
    },
  ]
};

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'contacts/:contactId',
    component: ContactComponent,
    children: [
      {
        path: 'details',
        component: ContactDetailsComponent
      },
      linksSubRoute
    ]
  },
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'companies/:companyId',
    component: CompanyComponent,
    children: [
      {
        path: 'details',
        component: CompanyDetailsComponent
      },
      {
        path: 'roles',
        component: CompanyRolesComponent
      },
      {
        path: 'roles/:roleId',
        component: CompanyRoleComponent
      },
      {
        path: 'environments',
        component: CompanyEnvironmentsComponent
      },
      linksSubRoute
    ]
  },
  {
    path: 'companies/:companyId/environments/:environmentId',
    component: CompanyEnvironmentComponent,
    children: [
      {
        path: 'details',
        component: CompanyEnvironmentDetailsComponent
      }]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:projectId',
    component: ProjectComponent,
    children: [
      {
        path: 'details',
        component: ProjectDetailsComponent
      },
      {
        path: 'roles',
        component: ProjectRolesComponent
      }

    ]
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'designs',
    component: DesignsComponent
  },
  {
    path: 'designs/:designId',
    component: DesignComponent,
    children: [
      {
        path: 'details',
        component: DesignDetailsComponent
      },
      {
        path: 'designelements',
        component: DesignElementsComponent
      },
      {
        path: 'epicelements',
        component: EpicElementsComponent
      },
      linksSubRoute
    ]
  },
  {
    path: 'designs/:designId/epicelements/:epicElementId',
    component: EpicElementComponent,
    children: [
      {
        path: 'details',
        component: EpicElementDetailsComponent
      },
      {
        path: 'entityelements',
        component: EntityElementsComponent
      },
      linksSubRoute
    ]
  },
  {
    path: 'designs/:designId/epicelements/:epicElementId/entityelements/:entityElementId',
    component: EntityElementComponent,
    children: [
      {
        path: 'details',
        component: EntityElementDetailsComponent
      },
      {
        path: 'propertyelements',
        component: PropertyElementsComponent
      },
      {
        path: 'commandelements',
        component: CommandElementsComponent
      },
      linksSubRoute
    ]
  },
  {
    path: 'designs/:designId/epicelements/:epicElementId/entityelements/:entityElementId/propertyelements/:propertyElementId',
    component: PropertyElementComponent,
    children: [
      {
        path: 'details',
        component: PropertyElementDetailsComponent
      },
      linksSubRoute
    ]
  },
  {
    path: 'designs/:designId/epicelements/:epicElementId/entityelements/:entityElementId/commandelements/:commandElementId',
    component: CommandElementComponent,
    children: [
      {
        path: 'details',
        component: CommandElementDetailsComponent
      },
      linksSubRoute
    ]
  },  
  {
    path: 'products/:productId',
    component: ProductComponent,
    children: [
      {
        path: 'details',
        component: ProductDetailsComponent
      },
      {
        path: 'versions',
        component: ProductVersionsComponent,
      },
      {
        path: 'productfeatures',
        component: ProductFeaturesComponent
      },
      linksSubRoute
    ]
  },
  {
    path: 'products/:productId/versions/:productVersionId',
    component: ProductVersionComponent,
    children: [
      {
        path: 'details',
        component: ProductVersionDetailsComponent
      },
      {
        path: 'features',
        component: ProductFeaturesComponent
      }]
  },
  {
    path: 'technologies',
    component: TechnologiesComponent
  },
  {
    path: 'technologies/:technologyId',
    component: TechnologyComponent
  },
  {
    path: 'productfeatures/:productFeatureId',
    component: ProductFeatureComponent
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
