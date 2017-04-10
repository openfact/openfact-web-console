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
import { ListComponent } from './ui/document/list/list.component';
import { ListToolbarComponent } from './ui/document/list-toolbar/list-toolbar.component';
import { EditComponent } from './ui/document/edit/edit.component';
import { EditPageComponent } from './ui/document/edit-page/edit-page.component';
import { EditToolbarComponent } from './ui/document/edit-toolbar/edit-toolbar.component';
import { EditWrapperComponent } from './ui/document/edit-wrapper/edit-wrapper.component';
import { ViewComponent } from './ui/document/view/view.component';
import { ViewPageComponent } from './ui/document/view-page/view-page.component';
import { ViewToolbarComponent } from './ui/document/view-toolbar/view-toolbar.component';
import { ViewWrapperComponent } from './ui/document/view-wrapper/view-wrapper.component';
import { OrganizationComponent } from './organization.component';

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
    ListComponent,
    ListToolbarComponent,
    EditComponent,
    EditPageComponent,
    EditToolbarComponent,
    EditWrapperComponent,
    ViewComponent,
    ViewPageComponent,
    ViewToolbarComponent,
    ViewWrapperComponent,
    OrganizationComponent,
  ]
})
export class OrganizationModule { }
