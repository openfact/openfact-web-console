import { NgModule, OpaqueToken } from "@angular/core";

import { LoginService } from './../shared/login.service';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { OnLogin } from './../shared/onlogin.service';
import { Restangular } from 'ng2-restangular';

export const OPENFACT_RESTANGULAR = new OpaqueToken('OpenfactRestangular');

export function OpenfactRestangularFactory(restangular: Restangular, oauthService: OAuthService, onLogin: OnLogin, loginService: LoginService) {
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

        RestangularConfigurer.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
            /*let baseUrl = '';
            let oauthConfig = currentOAuthConfig();
            if (oauthConfig) {
                baseUrl = oauthConfig.apiServer || '';
                if (baseUrl) {
                    let protocol = oauthConfig.apiServerProtocol || 'https';
                    baseUrl = protocol + '://' + baseUrl;
                }
            } else {
                console.log('No oauth config!');
            }
            // TODO setting the baseUrl to empty string doesn't seem to work so lets use the absolute URL of the app
            if (!baseUrl) {
                let location = window.location;
                if (location) {
                    let hostname = location.hostname;
                    let port = location.port;
                    if (hostname) {
                        let protocol = oauthConfig.apiServerProtocol || 'https';
                        baseUrl = protocol + '://' + hostname;
                        if (port) {
                            baseUrl += ':' + port;
                        }
                    }
                }
            }
            if (oauthConfig.apiServerBasePath) {
                baseUrl += oauthConfig.apiServerBasePath;
            }
            //console.log("==========  using Restangular base URL " + baseUrl);
            RestangularConfigurer.setBaseUrl(baseUrl);

            //console.log("===== setting kubernetes token: " + (token ? "token" : "no token") + " for " + url);
            headers['Authorization'] = 'Bearer ' + onLogin.token;
            return {
                params: params,
                headers: headers,
                element: element
            }*/
        });
    });
    return config;
}

