import { KEYCLOAK_RESTANGULAR, KeycloakRestangularFactory } from './services/keycloak.restangular';
import { OPENFACT_RESTANGULAR, OpenfactRestangularFactory } from './services/openfact.restangular';

import { CommonModule } from '@angular/common';
import { ConfigService } from './../config.service';
import { DocumentService } from './services/document.service';
import { DocumentStore } from './store/document.store';
import { NgModule } from '@angular/core';
import { OrganizationScope } from './services/organization.scope';
import { OrganizationService } from './services/organization.service';
import { OrganizationStore } from './store/organization.store';
import { RealmScope } from './services/realm.scope';
import { Restangular } from 'ngx-restangular';
import { SharedModule } from './../shared/shared.module';
import { ToastyService } from 'ng2-toasty';
import { UserService } from './services/user.service';
import { UserStore } from './store/user.store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [],
  providers: [
    {
      provide: OPENFACT_RESTANGULAR,
      useFactory: OpenfactRestangularFactory,
      deps: [Restangular, ConfigService, ToastyService]
    },
    {
      provide: KEYCLOAK_RESTANGULAR,
      useFactory: KeycloakRestangularFactory,
      deps: [Restangular, ToastyService]
    },

    OrganizationScope,
    OrganizationService,
    OrganizationStore,

    RealmScope,
    UserService,
    UserStore,

    DocumentService,
    DocumentStore
  ]
})
export class CoreModule { }
