import * as _ from 'lodash';

import { InjectionToken, NgModule } from '@angular/core';

import { ConfigService } from './../../config.service';
import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';
import { Restangular } from 'ngx-restangular';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { getOAuthConfig } from './../../../environments/oauth';

export const KEYCLOAK_RESTANGULAR = new InjectionToken('KeycloakRestangular');

export function KeycloakRestangularFactory(restangular: Restangular, toastr: ToastsManager) {
  const config = restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(KeycloakOAuthService.config().url);
  });
  return config;
}

