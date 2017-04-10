import { RouterModule, Routes } from '@angular/router';

import { DocumentsListPageComponent } from './ui/document/list-page/list-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'organizations', redirectTo: 'organizations/master', pathMatch: 'full' },
    { path: 'organizations/:organization', component: DocumentsListPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class OrganizationRoutingModule { }
