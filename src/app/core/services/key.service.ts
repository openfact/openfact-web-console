import { Document, Documents } from './../models/document.model';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { Inject, Injectable } from '@angular/core';
import { Key, Keys } from './../models/key.model';
import { User, Users } from './../models/user.model';

import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';
import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { OrganizationResourceService } from './organization.resource.service';
import { OrganizationScope } from './organization.scope';
import { Restangular } from 'ngx-restangular';
import { SearchResults } from './../store/entity/searchresults.model';
import { UserStore } from './../store/user.store';
import { pathJoin } from '../models/utils';

@Injectable()
export class KeyService extends OrganizationResourceService<Key, Keys> {

  constructor(
    @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular,
    organizationScope: OrganizationScope,
    private keycloakOAuthService: KeycloakOAuthService) {
    super(openfactRestangular, organizationScope, '/keys', '/admin/organizations');
  }

}
