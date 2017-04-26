import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { KeycloakOAuthService } from './../../../keycloak/keycloak.oauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'openfact-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  get username(): string {
    return KeycloakOAuthService.auth.authz.tokenParsed.username;
  }

  accountManagement() {
    KeycloakOAuthService.auth.authz.accountManagement();
  }

  serverInfo() {
    this.router.navigate(['/server-info']);
  }

  logout() {
    KeycloakOAuthService.auth.authz.logout();
  }

  about() {
    const url = this.router.createUrlTree(['./', { outlets: { popup: 'about' } }]);
    this.router.navigateByUrl(url, { relativeTo: this.route });
  }

  keycloak() {
    window.open(KeycloakOAuthService.auth.authz.authServerUrl);
  }

  home() {
    this.router.navigate(['/home']);
  }

}
