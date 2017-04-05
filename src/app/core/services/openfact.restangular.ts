import { InjectionToken, NgModule } from "@angular/core";

import { Restangular } from 'ng2-restangular';

export const OPENFACT_RESTANGULAR = new InjectionToken('OpenfactRestangular');

export function OpenfactRestangularFactory(restangular: Restangular) {
    const config = restangular.withConfig((RestangularConfigurer) => {
        // TODO setting the baseUrl to empty string doesn't seem to work so lets use the absolute URL of the app
        let baseUrl = '';
        let location = window.location;
        if (location) {
            let hostname = location.hostname;
            let port = location.port;
            if (hostname) {
                baseUrl = 'http://' + hostname;
                if (port) {
                    baseUrl += ':' + port;
                }
            }
        }
        //console.log("using Restangular base URL " + baseUrl);
        RestangularConfigurer.setBaseUrl(baseUrl);
    });
    return config;
}

