import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { KeycloakHttp } from './../../keycloak/keycloak.http';
import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';

const openfactResource = 'openfact';
const kcAccountResource = 'account';
const kcRealmManagementResource = 'realm-management';

@Directive({
  selector: '[openfactAccess]'
})
export class AccessDirective {

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<any>) { }

  @Input()
  set openfactAccess(access: string) {
    if (access === 'organizationMenu') {
      this.updateView(this.canAccessOrganizationsMenu());
    } else if (access === 'securityMenu') {
      this.updateView(this.canAccessSecurityMenu());

    } else if (access === 'createOrganizations') {
      this.updateView(this.canCreateOrganizations());

    } else if (access === 'manageUsers') {
      this.updateView(this.canManageUsers());
    } else {
      this.updateView(false);
    }
  }

  private updateView(state: boolean) {
    this._viewContainer.clear();
    if (state) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }

  // Menus
  private canAccessSecurityMenu() {
    return this.canViewUsers() || this.canManageUsers();
  }

  private canAccessOrganizationsMenu() {
    return true;
  }

  // Openfact
  private canCreateOrganizations() {
    return this.hasRole('create-organization', openfactResource);
  }

  // Keycloak
  private canViewUsers() {
    return this.hasRole('view-users', kcRealmManagementResource);
  }

  private canManageUsers() {
    return this.hasRole('manage-users', kcRealmManagementResource);
  }

  private hasRole(role: string, resource: string) {
    return KeycloakOAuthService.auth.authz.hasRealmRole(role) || KeycloakOAuthService.auth.authz.hasResourceRole(role, resource);
  }

}