import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakOAuthService } from './keycloak/keycloak.oauth.service';
import { KEYCLOAK_HTTP_PROVIDER } from './keycloak/keycloak.http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    KeycloakOAuthService,
    KEYCLOAK_HTTP_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
