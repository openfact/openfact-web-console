import { AdminEvent, AdminEvents } from './../models/admin-event.model';
import { Document, Documents } from './../models/document.model';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { Inject, Injectable } from '@angular/core';
import { User, Users } from './../models/user.model';

import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';
import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { OrganizationResourceService } from './organization.resource.service';
import { OrganizationScope } from './organization.scope';
import { Restangular } from 'ngx-restangular';
import { UserStore } from './../store/user.store';
import { pathJoin } from '../models/utils';

@Injectable()
export class AdminEventService extends OrganizationResourceService<AdminEvent, AdminEvents> {

  constructor(
    @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular,
    organizationScope: OrganizationScope,
    private keycloakOAuthService: KeycloakOAuthService) {
    super(openfactRestangular, organizationScope, '/admin-events', '/admin/organizations');
  }

}
