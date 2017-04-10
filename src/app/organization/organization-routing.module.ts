import { RouterModule, Routes } from '@angular/router';

import { DocumentsListPageComponent } from './ui/document/list-page/list-page.component';
import { GeneralInformationComponent } from './ui/settings/general-information/general-information.component';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './ui/settings/settings.component';
import { SmtpComponent } from './ui/settings/smtp/smtp.component';

const routes: Routes = [
    { path: 'organizations', redirectTo: 'organizations/master', pathMatch: 'full' },
    { path: 'organizations/:organization', component: DocumentsListPageComponent },
    {
        path: 'organizations/:organization/settings',
        component: SettingsComponent,
        children: [
            { path: '', component: GeneralInformationComponent },
            { path: 'smtp', component: SmtpComponent }
        ]
    },
    { path: 'organizations/:organization/documents', component: DocumentsListPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class OrganizationRoutingModule { }
