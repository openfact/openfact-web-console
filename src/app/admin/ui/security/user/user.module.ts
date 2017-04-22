import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponentsModule } from './../../../components/components.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../../core/core.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../../../shared/shared.module';
import { UserDeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UserEditComponent } from './edit/edit.component';
import { UserEditPageComponent } from './edit-page/edit-page.component';
import { UserEditToolbarComponent } from './edit-toolbar/edit-toolbar.component';
import { UserEditWrapperComponent } from './edit-wrapper/edit-wrapper.component';
import { UsersCreatePageComponent } from './create-page/create-page.component';
import { UsersListComponent } from './list/list.component';
import { UsersListPageComponent } from './list-page/list-page.component';
import { UsersListToolbarComponent } from './list-toolbar/list-toolbar.component';

const routes: Routes = [
  { path: '', component: UsersListPageComponent },
  { path: 'create', component: UsersCreatePageComponent }
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
    UsersListPageComponent,
    UsersListComponent,
    UsersListToolbarComponent,
    UserDeleteDialogComponent,
    UsersCreatePageComponent,
    UserEditPageComponent,
    UserEditWrapperComponent,
    UserEditToolbarComponent,
    UserEditComponent,
  ],
  entryComponents: [],
  exports: [
    UsersListPageComponent
  ],
  providers: []
})
export class AdminUserModule {
}
