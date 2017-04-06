import { InjectionToken, NgModule } from "@angular/core";

import { ConfigService } from './../../config.service';
import { Restangular } from 'ng2-restangular';
import { ToastyService } from 'ng2-toasty';
import { environment } from './../../../environments/environment';

export const KEYCLOAK_RESTANGULAR = new InjectionToken('KeycloakRestangular');

export function KeycloakRestangularFactory(restangular: Restangular, toastyService: ToastyService) {
  const config = restangular.withConfig((RestangularConfigurer) => {

    RestangularConfigurer.addErrorInterceptor((error, operation, what, url, response) => {
      if (error.status) {
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

    RestangularConfigurer.setBaseUrl(environment.keykloakBaseUrl);
  });
  return config;
}

