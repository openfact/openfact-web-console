import { ConfigService, configServiceInitializer } from './config.service';

import { APP_INITIALIZER } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from "ngx-bootstrap";
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KEYCLOAK_HTTP_PROVIDER } from './keycloak/keycloak.http';
import { KeycloakOAuthService } from './keycloak/keycloak.oauth.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ModalModule } from 'ngx-modal';
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
    BrowserAnimationsModule,
    RestangularModule.forRoot([ConfigService], restangularProviderConfigurer),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule,
    LocalStorageModule.withConfig({
      prefix: 'openfact',
      storageType: 'localStorage'
    }),
    ToastyModule.forRoot(),
    AppRoutingModule,

    AdminModule,
    OrganizationModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    KeycloakOAuthService,
    KEYCLOAK_HTTP_PROVIDER,
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
