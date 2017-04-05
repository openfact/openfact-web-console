import { OPENFACT_RESTANGULAR, OpenfactRestangularFactory } from './services/openfact.restangular';

import { CommonModule } from '@angular/common';
import { ConfigService } from './../config.service';
import { NgModule } from '@angular/core';
import { OrganizationService } from './services/organization.service';
import { OrganizationStore } from './store/organization.store';
import { Restangular } from 'ng2-restangular';
import { SharedModule } from './../shared/shared.module';

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
      deps: [Restangular, ConfigService]
    },

    OrganizationService,
    OrganizationStore
  ]
})
export class CoreModule { }
