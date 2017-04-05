import { InjectionToken, NgModule } from "@angular/core";

import { ConfigService } from './../../config.service';
import { Restangular } from 'ng2-restangular';

export const OPENFACT_RESTANGULAR = new InjectionToken('OpenfactRestangular');

export function OpenfactRestangularFactory(restangular: Restangular, configService: ConfigService) {
  const config = restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(configService.getSettings().apiEndpoint);
  });
  return config;
}

