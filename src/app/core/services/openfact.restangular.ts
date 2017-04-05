import { InjectionToken, NgModule } from "@angular/core";

import { ConfigService } from './../../config.service';
import { KeycloakService } from './../../keycloak/keycloak.service';
import { Restangular } from 'ng2-restangular';
import { ToastyService } from 'ng2-toasty';

export const OPENFACT_RESTANGULAR = new InjectionToken('OpenfactRestangular');

export function OpenfactRestangularFactory(restangular: Restangular, configService: ConfigService, toastyService: ToastyService) {
  const config = restangular.withConfig((RestangularConfigurer) => {

    RestangularConfigurer.addErrorInterceptor((error, operation, what, url, response) => {
      if (error.status === 401) {
        window.location.href = KeycloakService.auth.logoutUrl;
      } else if (error.status === 403) {
        window.location.replace('/forbidden');
      } else if (error.status === 404) {
        window.location.replace('/notfound');
      } else if (error.status) {
        let data: Response;
        try {
          data = error.json();
        } catch (err) {
          console.log(err);
        }

        if (data && data['errorMessage']) {
          toastyService.error(data['errorMessage']);
        } else {
          toastyService.error('An unexpected server response has occurred');
        }

        return false; // response handled
      }
      return true; // response not handled
    });

    RestangularConfigurer.setBaseUrl(configService.getSettings().apiEndpoint);
  });
  return config;
}

