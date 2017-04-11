import { Injectable } from "@angular/core";
import { OpenfactResourceStore } from './openfactresource.store';
import { Organization } from './../models/organization.model';
import { OrganizationService } from './../services/organization.service';
import { Organizations } from './../models/organization.model';
import { SearchResults } from './entity/search.model';

@Injectable()
export class OrganizationStore extends OpenfactResourceStore<Organization, Organizations, SearchResults<Organization>, OrganizationService> {

  constructor(organizationService: OrganizationService) {
    super(organizationService, [], <SearchResults<Organization>>{ items: [], totalSize: 0 }, <Organization>{}, Organization);
  }

  protected get kind() {
    return 'Organization';
  }

  navigateToOrganization(organization: Organization) {
    const resty: any = organization;
    return resty.one(organization.organization);
  }

}
