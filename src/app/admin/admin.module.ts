import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { OrganizationCreatePageComponent } from './ui/organization/create-page/create-page.component';
import { OrganizationsListComponent } from './ui/organization/list/list.component';
import { OrganizationsListPageComponent } from './ui/organization/list-page/list-page.component';
import { OrganizationsListToolbarComponent } from './ui/organization/list-toolbar/list-toolbar.component';
import { SecurityComponent } from './ui/security/security.component';
import { SharedModule } from './../shared/shared.module';
import { UsersListComponent } from './ui/security/user/list/list.component';
import { UsersListPageComponent } from './ui/security/user/list-page/list-page.component';
import { UsersListToolbarComponent } from './ui/security/user/list-toolbar/list-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    AdminHeaderComponent,

    OrganizationsListComponent,
    OrganizationsListPageComponent,
    OrganizationsListToolbarComponent,
    OrganizationCreatePageComponent,

    SecurityComponent,
    UsersListPageComponent,
    UsersListComponent,
    UsersListToolbarComponent,
  ],
  providers: []
})
export class AdminModule { }
