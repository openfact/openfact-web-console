import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';

const resourceName = 'openfact';

@Directive({
  selector: '[openfactHasRole]'
})
export class HasRoleDirective {

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<any>) { }

  @Input()
  set openfactHasRole(access: string | Array<string>) {
    if (access === 'createOrganization') {
      this.updateView(this.canCreateOrganization());
    } else {
      this.updateView(false);
    }
  }

  private updateView(state: boolean) {
    if (!state) {
      this._viewContainer.clear();
    } else {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }

  private canCreateOrganization() {
    return this.hasRole('create-organization');
  }

  private hasRole(role: string) {
    return KeycloakOAuthService.auth.authz.hasRealmRole(role) || KeycloakOAuthService.auth.authz.hasResourceRole(role, resourceName);
  }

}
