import { RouterModule, Routes } from '@angular/router';

import { CreateOrganizationPageComponent } from './ui/organization/create-page/create-page.component';
import { CreateUserPageComponent } from './ui/security/user/create-page/create-page.component';
import { EditUserPageComponent } from './ui/security/user/edit-page/edit-page.component';
import { NgModule } from '@angular/core';
import { OrganizationsListComponent } from './ui/organization/list/list.component';
import { OrganizationsListPageComponent } from './ui/organization/list-page/list-page.component';
import { SecurityComponent } from './ui/security/security.component';
import { UsersListPageComponent } from './ui/security/user/list-page/list-page.component';

const routes: Routes = [
  { path: 'admin', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'admin/organizations', component: OrganizationsListPageComponent },
  { path: 'admin/organizations/create', component: CreateOrganizationPageComponent },
  {
    path: 'admin/security', component: SecurityComponent,
    children: [
      { path: '', component: UsersListPageComponent },
      { path: 'users', redirectTo: 'users/create', pathMatch: 'full' },
      { path: 'users/create', component: CreateUserPageComponent },
      { path: 'users/:user', component: EditUserPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
