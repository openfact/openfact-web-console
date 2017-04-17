import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdditionalInformationComponent } from './ui/settings/additional-information/additional-information.component';
import { AdditionalInformationPageComponent } from './ui/settings/additional-information-page/additional-information-page.component';
import { AdditionalInformationWrapperComponent } from './ui/settings/additional-information-wrapper/additional-information-wrapper.component';
import { CommonModule } from '@angular/common';
import { DocumentCreatePageComponent } from './ui/document/create-page/create-page.component';
import { DocumentDeleteDialogComponent } from './ui/document/delete-dialog/delete-dialog.component';
import { DocumentEditPageComponent } from './ui/document/edit-page/edit-page.component';
import { DocumentUploadPageComponent } from './ui/document/upload-page/upload-page.component';
import { DocumentViewPageComponent } from './ui/document/view-page/view-page.component';
import { DocumentsListComponent } from './ui/document/list/list.component';
import { DocumentsListPageComponent } from './ui/document/list-page/list-page.component';
import { EditComponent } from './ui/document/edit/edit.component';
import { EditToolbarComponent } from './ui/document/edit-toolbar/edit-toolbar.component';
import { EditWrapperComponent } from './ui/document/edit-wrapper/edit-wrapper.component';
import { GeneralInformationComponent } from './ui/settings/general-information/general-information.component';
import { GeneralInformationPageComponent } from './ui/settings/general-information-page/general-information-page.component';
import { GeneralInformationWrapperComponent } from './ui/settings/general-information-wrapper/general-information-wrapper.component';
import { ListToolbarComponent } from './ui/document/list-toolbar/list-toolbar.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { OrganizationContentComponent } from './components/organization-content/organization-content.component';
import { OrganizationHeaderComponent } from './components/organization-header/organization-header.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationSidebarComponent } from './components/organization-sidebar/organization-sidebar.component';
import { SharedModule } from './../shared/shared.module';
import { SmtpComponent } from './ui/settings/smtp/smtp.component';
import { SmtpPageComponent } from './ui/settings/smtp-page/smtp-page.component';
import { SmtpWrapperComponent } from './ui/settings/smtp-wrapper/smtp-wrapper.component';
import { ToolbarComponent } from './ui/settings/toolbar/toolbar.component';
import { ViewComponent } from './ui/document/view/view.component';
import { ViewToolbarComponent } from './ui/document/view-toolbar/view-toolbar.component';
import { ViewWrapperComponent } from './ui/document/view-wrapper/view-wrapper.component';
import { ThemeComponent } from './ui/settings/theme/theme.component';
import { ThemePageComponent } from './ui/settings/theme-page/theme-page.component';
import { ThemeWrapperComponent } from './ui/settings/theme-wrapper/theme-wrapper.component';
import { TasksComponent } from './ui/settings/tasks/tasks.component';
import { TasksPageComponent } from './ui/settings/tasks-page/tasks-page.component';
import { TasksWrapperComponent } from './ui/settings/tasks-wrapper/tasks-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationRoutingModule,

    SharedModule
  ],
  declarations: [
    OrganizationHeaderComponent,
    DocumentsListPageComponent,
    OrganizationSidebarComponent,
    OrganizationContentComponent,
    DocumentsListComponent,
    ListToolbarComponent,
    EditComponent,
    DocumentEditPageComponent,
    EditToolbarComponent,
    EditWrapperComponent,
    ViewComponent,
    DocumentViewPageComponent,
    ViewToolbarComponent,
    ViewWrapperComponent,
    OrganizationComponent,
    DocumentDeleteDialogComponent,
    DocumentCreatePageComponent,
    DocumentUploadPageComponent,
    SmtpPageComponent,
    SmtpWrapperComponent,
    ToolbarComponent,
    SmtpComponent,
    GeneralInformationPageComponent,
    GeneralInformationWrapperComponent,
    GeneralInformationComponent,
    AdditionalInformationPageComponent,
    AdditionalInformationWrapperComponent,
    AdditionalInformationComponent,
    ThemeComponent,
    ThemePageComponent,
    ThemeWrapperComponent,
    TasksComponent,
    TasksPageComponent,
    TasksWrapperComponent,
  ]
})
export class OrganizationModule { }
