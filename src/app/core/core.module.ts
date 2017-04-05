import { OPENFACT_RESTANGULAR, OpenfactRestangularFactory } from './services/openfact.restangular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
      deps: [Restangular]
    }
  ]
})
export class CoreModule { }
