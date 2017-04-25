import { InjectionToken, NgModule } from "@angular/core";

import { ConfigService } from './../../config.service';
import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';
import { Restangular } from 'ngx-restangular';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

export const OPENFACT_RESTANGULAR = new InjectionToken('OpenfactRestangular');
export const OPENFACT_ORGANIZATION_RESTANGULAR = new InjectionToken('OpenfactOrganizationRestangular');

export function OpenfactRestangularFactory(restangular: Restangular, configService: ConfigService, toastr: ToastsManager) {
  const config = restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.addErrorInterceptor((error, operation, what, url, response) => {
      return OpenfactErrorInterceptor(error, operation, what, url, response, toastr);
    });
    RestangularConfigurer.setBaseUrl(configService.getSettings().apiEndpoint);
  });
  return config;
}

export function OpenfactOrganizationRestangularFactory(restangular: Restangular, configService: ConfigService, toastr: ToastsManager) {
  const config = restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.addErrorInterceptor((error, operation, what, url, response) => {
      return RestangularConfigurer.addErrorInterceptor((error, operation, what, url, response) => {
        return OpenfactErrorInterceptor(error, operation, what, url, response, toastr);
      });
    });
    RestangularConfigurer.setBaseUrl(configService.getSettings().apiEndpoint);
    //RestangularConfigurer.setRestangularFields({ 'id': 'organization' });
  });
  return config;
}

function OpenfactErrorInterceptor(error, operation, what, url, response, toastr: ToastsManager) {
  if (error.status === 401) {
    window.location.href = KeycloakOAuthService.auth.logoutUrl;
  } else if (error.status === 403) {
    window.location.replace('/forbidden');
  } else if (error.status === 404) {
    //window.location.replace('/notfound');
  } else if (error.status) {
    let data: Response;
    try {
      data = error.json();
    } catch (err) {
      console.log(err);
    }

    if (data && data['errorMessage']) {
      toastr.error(data['errorMessage']);
    } else {
      toastr.error('An unexpected server response has occurred');
    }

    //return false; // response handled
  }
  return true; // response not handled
}
