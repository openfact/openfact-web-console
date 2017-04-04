import { Inject, Injectable } from '@angular/core';
import { Organization, Organizations } from './../models/organization.model';

import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { OpenfactService } from './openfact.service';
import { Restangular } from 'ng2-restangular';

@Injectable()
export class OrganizationService extends OpenfactService<Organization, Organizations> {

    constructor( @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular) {
        super(openfactRestangular.service('namespaceOrProjectsUrl()'));
    }

    get serviceUrl(): string {
        return '';
    }
}

