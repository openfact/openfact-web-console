import { InjectionToken, NgModule } from "@angular/core";

import { ConfigService } from './../../config.service';
import { Restangular } from 'ng2-restangular';
import { ToastyService } from 'ng2-toasty';
import { environment } from './../../../environments/environment';

export const KEYCLOAK_RESTANGULAR = new InjectionToken('KeycloakRestangular');

export function KeycloakRestangularFactory(restangular: Restangular, toastyService: ToastyService) {
  const config = restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(environment.keykloakBaseUrl);
  });
  return config;
}

