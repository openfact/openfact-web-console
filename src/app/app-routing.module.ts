import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './common/about/about.component';
import { Error403Component } from './common/error403/error403.component';
import { Error404Component } from './common/error404/error404.component';
import { Error500Component } from './common/error500/error500.component';
import { NgModule } from '@angular/core';
import { ServerInfoComponent } from './common/server-info/server-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'home', redirectTo: 'admin/organizations', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, outlet: 'secondary' },
  { path: 'server-info', component: ServerInfoComponent },
  { path: 'notfound', component: Error404Component },
  { path: 'forbidden', component: Error403Component },
  { path: 'server-error', component: Error500Component },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  // { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
