import { ConfigService, configServiceInitializer } from './config.service';

import { APP_INITIALIZER } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from "ng2-bootstrap";
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OrganizationModule } from './organization/organization.module';
import { RestangularModule } from "ng2-restangular";
import { SharedModule } from './shared/shared.module';
import { ToastyModule } from 'ng2-toasty';

export function restangularProviderConfigurer(restangularProvider: any, config: ConfigService) {
  restangularProvider.setBaseUrl(config.getSettings().apiEndpoint);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestangularModule.forRoot([ConfigService], restangularProviderConfigurer),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'openfact',
      storageType: 'localStorage'
    }),
    ToastyModule.forRoot(),
    AppRoutingModule,

    SharedModule,
    CoreModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializer,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
