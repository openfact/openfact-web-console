import { CommonModule } from '@angular/common';
import { DocumentsListPageComponent } from './ui/document/list-page/list-page.component';
import { NgModule } from '@angular/core';
import { OrganizationHeaderComponent } from './components/organization-header/organization-header.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,

    SharedModule
  ],
  declarations: [OrganizationHeaderComponent, DocumentsListPageComponent]
})
export class OrganizationModule { }
