import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrganizationCreateComponent } from './ui/organization-create/organization-create.component';
import { OrganizationListComponent } from './ui/organization-list/organization-list.component';

const routes: Routes = [
    { path: '', component: OrganizationListComponent },
    { path: 'create', component: OrganizationCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
