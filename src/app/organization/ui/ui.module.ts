import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from './../components/components.module';
import { OrganizationUIComponent } from './ui.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationUIComponent,
    children: [
      { path: '', redirectTo: 'documents', pathMatch: 'full' },
      { path: 'documents', loadChildren: 'app/organization/ui/document/document.module#DocumentModule' },
      { path: 'settings', loadChildren: 'app/organization/ui/settings/settings.module#OrganizationSettingsModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    OrganizationComponentsModule
  ],
  exports: [RouterModule],
  declarations: [OrganizationUIComponent]
})
export class OrganizationUIModule {
}
