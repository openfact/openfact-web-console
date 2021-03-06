import { KEYCLOAK_RESTANGULAR, KeycloakRestangularFactory } from './services/keycloak.restangular';
import {
  OPENFACT_ORGANIZATION_RESTANGULAR,
  OPENFACT_RESTANGULAR,
  OpenfactOrganizationRestangularFactory,
  OpenfactRestangularFactory,
} from './services/openfact.restangular';

import { CommonModule } from '@angular/common';
import { ComponentService } from './services/component.service';
import { ComponentStore } from './store/component.store';
import { ConfigService } from './../config.service';
import { DocumentService } from './services/document.service';
import { DocumentStore } from './store/document.store';
import { KEYCLOAK_HTTP_PROVIDER } from './../keycloak/keycloak.http';
import { KeyService } from './services/key.service';
import { KeysStore } from './store/key.store';
import { NgModule } from '@angular/core';
import { OrganizationScope } from './services/organization.scope';
import { OrganizationService } from './services/organization.service';
import { OrganizationStore } from './store/organization.store';
import { RealmScope } from './services/realm.scope';
import { Restangular } from 'ngx-restangular';
import { ServerInfoService } from './services/serverinfo.service';
import { ServerInfoStore } from './store/serverinfo.store';
import { SharedModule } from './../shared/shared.module';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
      deps: [Restangular, ConfigService, ToastsManager]
    },
    {
      provide: OPENFACT_ORGANIZATION_RESTANGULAR,
      useFactory: OpenfactOrganizationRestangularFactory,
      deps: [Restangular, ConfigService, ToastsManager]
    },
    {
      provide: KEYCLOAK_RESTANGULAR,
      useFactory: KeycloakRestangularFactory,
      deps: [Restangular, ToastsManager]
    },

    ServerInfoService,
    ServerInfoStore,

    OrganizationScope,
    OrganizationService,
    OrganizationStore,

    KeyService,
    KeysStore,

    ComponentService,
    ComponentStore,

    DocumentService,
    DocumentStore,

    RealmScope,
    UserService,
    UserStore,

    KEYCLOAK_HTTP_PROVIDER
  ]
})
export class CoreModule { }
