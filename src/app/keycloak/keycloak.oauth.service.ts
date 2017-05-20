import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable()
export class KeycloakOAuthService {
  static auth: any = {};

  static init(): Promise<any> {
    const keycloakAuth: any = Keycloak('/config/keycloak.json');
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
