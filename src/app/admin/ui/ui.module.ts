import { RouterModule, Routes } from '@angular/router';

import { AdminComponentsModule } from './../components/components.module';
import { AdminUIComponent } from './ui.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdminUIComponent,
    children: [
      { path: '', redirectTo: 'organizations', pathMatch: 'full' },
      { path: 'organizations', loadChildren: 'app/admin/ui/organization/organization.module#AdminOrganizationModule' },
      { path: 'security', loadChildren: 'app/admin/ui/security/security.module#AdminSecurityModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AdminComponentsModule
  ],
  exports: [RouterModule],
  declarations: [AdminUIComponent]
})
export class AdminUIModule {
}
