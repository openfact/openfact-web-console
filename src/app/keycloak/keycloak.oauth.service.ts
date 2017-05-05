import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { getOAuthConfig } from './../../environments/oauth';

declare var Keycloak: any;

export const defaults = Object.freeze({
  url: 'http://localhost:8080/auth',
  realm: 'openfact',
  clientId: 'openfact-web-console'
});

@Injectable()
export class KeycloakOAuthService {
  static auth: any = {};

  static config() {
    return Object.freeze(_.merge({}, defaults, getOAuthConfig()));
  }

  static init(): Promise<any> {
    const keycloakAuth: any = Keycloak(KeycloakOAuthService.config());
    KeycloakOAuthService.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
      keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          KeycloakOAuthService.auth.loggedIn = true;
          KeycloakOAuthService.auth.authz = keycloakAuth;
          KeycloakOAuthService.auth.logoutUrl = keycloakAuth.authServerUrl
            + '/realms/openfact/protocol/openid-connect/logout?redirect_uri='
            + document.baseURI;
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  logout() {
    console.log('*** LOGOUT');
    KeycloakOAuthService.auth.loggedIn = false;
    KeycloakOAuthService.auth.authz = null;

    window.location.href = KeycloakOAuthService.auth.logoutUrl;
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakOAuthService.auth.authz.token) {
        KeycloakOAuthService.auth.authz
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakOAuthService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not loggen in');
      }
    });
  }
}
