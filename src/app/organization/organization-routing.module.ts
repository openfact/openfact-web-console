import { RouterModule, Routes } from '@angular/router';

import { AdditionalInformationPageComponent } from './ui/settings/additional-information-page/additional-information-page.component';
import { DocumentCreatePageComponent } from './ui/document/create-page/create-page.component';
import { DocumentEditPageComponent } from './ui/document/edit-page/edit-page.component';
import { DocumentUploadPageComponent } from './ui/document/upload-page/upload-page.component';
import { DocumentViewPageComponent } from './ui/document/view-page/view-page.component';
import { DocumentsListPageComponent } from './ui/document/list-page/list-page.component';
import { GeneralInformationComponent } from './ui/settings/general-information/general-information.component';
import { GeneralInformationPageComponent } from './ui/settings/general-information-page/general-information-page.component';
import { KeysPageComponent } from './ui/settings/keys-page/keys-page.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './organization.component';
import { SmtpPageComponent } from './ui/settings/smtp-page/smtp-page.component';
import { ThemePageComponent } from './ui/settings/theme-page/theme-page.component';

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
      { path: 'documents/:document/edit', component: DocumentEditPageComponent },
      { path: 'settings', redirectTo: 'settings/general-information', pathMatch: 'full' },
      { path: 'settings/general-information', component: GeneralInformationPageComponent },
      { path: 'settings/additional-information', component: AdditionalInformationPageComponent },
      { path: 'settings/theme-settings', component: ThemePageComponent },
      { path: 'settings/smtp-settings', component: SmtpPageComponent },
      { path: 'settings/keys', component: KeysPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrganizationRoutingModule { }
