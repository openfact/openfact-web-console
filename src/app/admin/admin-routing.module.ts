import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrganizationCreateComponent } from './ui/organization/organization-create/organization-create.component';
import { OrganizationsListComponent } from './ui/organization/list/list.component';

const routes: Routes = [
    { path: '', component: OrganizationsListComponent },
    { path: 'create', component: OrganizationCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
