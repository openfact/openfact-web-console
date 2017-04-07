import { Component, OnInit } from '@angular/core';

import { KeycloakOAuthService } from './../../../keycloak/keycloak.oauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'openfact-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }

  get username(): string {
    return KeycloakOAuthService.auth.authz.tokenParsed.username;
  }

  accountManagement() {
    KeycloakOAuthService.auth.authz.accountManagement();
  }

  logout() {
    KeycloakOAuthService.auth.authz.logout();
  }

}
