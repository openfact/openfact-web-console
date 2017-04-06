import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrganizationCreatePageComponent } from './ui/organization/create-page/create-page.component';
import { OrganizationsListComponent } from './ui/organization/list/list.component';
import { OrganizationsListPageComponent } from './ui/organization/list-page/list-page.component';

const routes: Routes = [
    { path: 'admin', redirectTo: 'admin/organizations', pathMatch: 'full' },
    { path: 'admin/organizations', component: OrganizationsListPageComponent },
    { path: 'admin/organizations/create', component: OrganizationCreatePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
