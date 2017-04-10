import { Document, Documents } from './../models/document.model';
import { Inject, Injectable } from '@angular/core';
import { User, Users } from './../models/user.model';

import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { OrganizationResourceService } from './organization.resource.service';
import { OrganizationScope } from './organization.scope';
import { Restangular } from 'ng2-restangular';
import { UserStore } from './../store/user.store';
import { pathJoin } from '../models/utils';

@Injectable()
export class DocumentService extends OrganizationResourceService<Document, Documents> {

  constructor(
    @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular,
    organizationScope: OrganizationScope) {
    super(openfactRestangular, organizationScope, '/documents', '/admin/organizations');
  }

}
