import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponentsModule } from './../../components/components.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../core/core.module';
import { NgModule } from '@angular/core';
import { OrganizationsCreatePageComponent } from './create-page/create-page.component';
import { OrganizationsListComponent } from './list/list.component';
import { OrganizationsListPageComponent } from './list-page/list-page.component';
import { OrganizationsListToolbarComponent } from './list-toolbar/list-toolbar.component';
import { SharedModule } from './../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: OrganizationsListPageComponent },
  { path: 'create', component: OrganizationsCreatePageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AdminComponentsModule,

    SharedModule,
    CoreModule
  ],
  declarations: [
    OrganizationsListComponent,
    OrganizationsListPageComponent,
    OrganizationsListToolbarComponent,
    OrganizationsCreatePageComponent,
  ],
  entryComponents: [],
  exports: [
    OrganizationsListPageComponent
  ],
  providers: []
})
export class AdminOrganizationModule {
}
