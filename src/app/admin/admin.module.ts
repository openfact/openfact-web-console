import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../core/core.module';
import { CreateOrganizationPageComponent } from './ui/organization/create-page/create-page.component';
import { CreateUserPageComponent } from './ui/security/user/create-page/create-page.component';
import { EditUserPageComponent } from './ui/security/user/edit-page/edit-page.component';
import { NgModule } from '@angular/core';
import { OrganizationsListComponent } from './ui/organization/list/list.component';
import { OrganizationsListPageComponent } from './ui/organization/list-page/list-page.component';
import { OrganizationsListToolbarComponent } from './ui/organization/list-toolbar/list-toolbar.component';
import { SecurityComponent } from './ui/security/security.component';
import { SharedModule } from './../shared/shared.module';
import { UserDeleteDialogComponent } from './ui/security/user/delete-dialog/delete-dialog.component';
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
    CreateOrganizationPageComponent,

    SecurityComponent,
    UsersListPageComponent,
    UsersListComponent,
    UsersListToolbarComponent,
    UserDeleteDialogComponent,
    CreateUserPageComponent,
    EditUserPageComponent,
  ],
  providers: []
})
export class AdminModule { }
