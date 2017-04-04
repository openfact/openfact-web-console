import { Injectable } from "@angular/core";
import { OpenfactResourceStore } from './openfactresource.store';
import { Organization } from './../models/organization.model';
import { OrganizationService } from './../services/organization.service';
import { Organizations } from './../models/organization.model';

@Injectable()
export class OrganizationStore extends OpenfactResourceStore<Organization, Organizations, OrganizationService> {

    constructor(organizationService: OrganizationService) {
        super(organizationService, [], <Organization>{}, Organization);
    }

    protected get kind() {
        return 'Organization';
    }

}
