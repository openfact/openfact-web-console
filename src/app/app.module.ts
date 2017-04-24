import { BsDropdownModule, ModalModule } from "ngx-bootstrap";
import { ConfigService, configServiceInitializer } from './config.service';

import { APP_INITIALIZER } from '@angular/core';
import { AboutComponent } from './common/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonHeaderComponent } from './common/header/header.component';
import { CoreModule } from './core/core.module';
import { Error403Component } from './common/error403/error403.component'
import { Error404Component } from './common/error404/error404.component';
import { Error500Component } from './common/error500/error500.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { KEYCLOAK_HTTP_PROVIDER } from './keycloak/keycloak.http';
import { KeycloakOAuthService } from './keycloak/keycloak.oauth.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RestangularModule } from 'ngx-restangular';
import { ServerInfoComponent } from './common/server-info/server-info.component';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

export function restangularProviderConfigurer(restangularProvider: any, config: ConfigService) {
  restangularProvider.setBaseUrl(config.getSettings().apiEndpoint);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServerInfoComponent,
    CommonHeaderComponent,
    Error403Component,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RestangularModule.forRoot([ConfigService], restangularProviderConfigurer),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    MomentModule,
    JWBootstrapSwitchModule,
    FileUploadModule,
    LocalStorageModule.withConfig({
      prefix: 'openfact',
      storageType: 'localStorage'
    }),
    ToastModule.forRoot(),
    AppRoutingModule,

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
