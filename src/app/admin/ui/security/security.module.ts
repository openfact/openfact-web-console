import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponentsModule } from './../../components/components.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../core/core.module';
import { NgModule } from '@angular/core';
import { SecurityComponent } from './security.component';
import { SharedModule } from './../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', loadChildren: 'app/admin/ui/security/user/user.module#AdminUserModule' }
    ]
  }
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
    SecurityComponent,    
  ],
  entryComponents: [],
  exports: [
  ],
  providers: []
})
export class AdminSecurityModule {
}
