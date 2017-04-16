import { RouterModule, Routes } from '@angular/router';

import { DocumentCreatePageComponent } from './ui/document/create-page/create-page.component';
import { DocumentEditPageComponent } from './ui/document/edit-page/edit-page.component';
import { DocumentUploadPageComponent } from './ui/document/upload-page/upload-page.component';
import { DocumentViewPageComponent } from './ui/document/view-page/view-page.component';
import { DocumentsListPageComponent } from './ui/document/list-page/list-page.component';
import { GeneralInformationComponent } from './ui/settings/general-information/general-information.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { SettingsComponent } from './ui/settings/settings.component';
import { SmtpComponent } from './ui/settings/smtp/smtp.component';

const routes: Routes = [
  {
    path: 'organizations/:organization',
    component: OrganizationComponent,
    children: [
      { path: '', redirectTo: 'documents', pathMatch: 'full' },
      { path: 'documents', component: DocumentsListPageComponent },
      { path: 'documents/create', component: DocumentCreatePageComponent },
      { path: 'documents/upload', component: DocumentUploadPageComponent },
      { path: 'documents/:document', component: DocumentViewPageComponent },
      { path: 'documents/:document/edit', component: DocumentEditPageComponent }
    ]
  },
  // { path: 'organizations/:organization', component: DocumentsListPageComponent },
  // {
  //     path: 'organizations/:organization/settings',
  //     component: SettingsComponent,
  //     children: [
  //         { path: '', component: GeneralInformationComponent },
  //         { path: 'smtp', component: SmtpComponent }
  //     ]
  // },
  // { path: 'organizations/:organization/documents', component: DocumentsListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrganizationRoutingModule { }
