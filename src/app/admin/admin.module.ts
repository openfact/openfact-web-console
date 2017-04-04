import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganizationListComponent } from './ui/organization-list/organization-list.component';
import { SharedModule } from './../shared/shared.module';
import { OrganizationCreateComponent } from './ui/organization-create/organization-create.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHeaderComponent,
    OrganizationListComponent,
    OrganizationCreateComponent
  ]
})
export class AdminModule { }
