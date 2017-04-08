import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './common/about/about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, outlet: 'secondary' },
  { path: 'home', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
