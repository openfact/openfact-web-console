import { Inject, Injectable } from '@angular/core';
import { Organization, Organizations } from './../models/organization.model';

import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { OpenfactService } from './openfact.service';
import { Restangular } from 'ng2-restangular';
import { SearchResults } from './../store/entity/search.model';

const organizationsUrl = '/admin/organizations';

@Injectable()
export class OrganizationService extends OpenfactService<Organization, Organizations, SearchResults<Organization>> {

  constructor( @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular) {
    super(openfactRestangular.service(organizationsUrl));
  }

  get serviceUrl(): string {
    return organizationsUrl;
  }
}

