import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrganizationCreatePageComponent } from './ui/organization/create-page/create-page.component';
import { OrganizationsListComponent } from './ui/organization/list/list.component';
import { OrganizationsListPageComponent } from './ui/organization/list-page/list-page.component';
import { SecurityComponent } from './ui/security/security.component';
import { UsersListPageComponent } from './ui/security/user/list-page/list-page.component';

const routes: Routes = [
  { path: 'admin', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'admin/organizations', component: OrganizationsListPageComponent },
  { path: 'admin/organizations/create', component: OrganizationCreatePageComponent },
  {
    path: 'admin/security', component: SecurityComponent,
    children: [
      { path: '', component: UsersListPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
