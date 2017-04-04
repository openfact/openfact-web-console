import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganizationCreateComponent } from './ui/organization-create/organization-create.component';
import { OrganizationListComponent } from './ui/organization-list/organization-list.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,

    SharedModule
  ],
  declarations: [
    AdminHeaderComponent,
    OrganizationListComponent,
    OrganizationCreateComponent
  ]
})
export class AdminModule { }
