import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'home', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
