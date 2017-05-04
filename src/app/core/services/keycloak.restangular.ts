import { InjectionToken, NgModule } from '@angular/core';

import { ConfigService } from './../../config.service';
import { Restangular } from 'ngx-restangular';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { environment } from './../../../environments/environment';

export const KEYCLOAK_RESTANGULAR = new InjectionToken('KeycloakRestangular');

export function KeycloakRestangularFactory(restangular: Restangular, toastr: ToastsManager) {
  const config = restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(environment.keykloakBaseUrl);
  });
  return config;
}

