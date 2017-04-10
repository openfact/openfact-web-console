import { CommonModule } from '@angular/common';
import { DocumentsListPageComponent } from './ui/document/list-page/list-page.component';
import { GeneralInformationComponent } from './ui/settings/general-information/general-information.component';
import { NgModule } from '@angular/core';
import { OrganizationContentComponent } from './components/organization-content/organization-content.component';
import { OrganizationHeaderComponent } from './components/organization-header/organization-header.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationSidebarComponent } from './components/organization-sidebar/organization-sidebar.component';
import { SettingsComponent } from './ui/settings/settings.component';
import { SharedModule } from './../shared/shared.module';
import { SmtpComponent } from './ui/settings/smtp/smtp.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,

    SharedModule
  ],
  declarations: [
    OrganizationHeaderComponent,
    DocumentsListPageComponent,
    OrganizationSidebarComponent,
    OrganizationContentComponent,
    SmtpComponent,
    SettingsComponent,
    GeneralInformationComponent,
  ]
})
export class OrganizationModule { }
