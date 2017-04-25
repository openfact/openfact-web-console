import { Organization, Organizations } from './../models/organization.model';

import { AbstractStore } from './entity/entity.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KeycloakResourceStore } from './keycloakresource.store';
import { KeycloakService } from '../services/keycloak.service';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactResourceSearchStore } from "./openfactresource.search.store";
import { OpenfactService } from '../services/openfact.service';
import { OrganizationResourceSearchService } from '../services/organization.resource.search.service';
import { OrganizationScope } from './../services/organization.scope';
import { RealmScope } from './../services/realm.scope';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';
import { Subscription } from 'rxjs/Subscription';

export abstract class OrganizationResourceSearchStore<T extends OpenfactResource, L extends Array<T>,
  C extends SearchCriteria<T>, S extends SearchResults<T>,
  R extends OrganizationResourceSearchService<T, L, S>> extends OpenfactResourceSearchStore<T, L, C, S, R> {

  private organizationSubscription: Subscription;

  constructor(service: any, initialList, initialSearch: any, initialCurrent: any, public organizationScope: OrganizationScope, type: any) {
    super(service, initialList, initialSearch, initialCurrent, type);
    if (this.organizationScope) {
      this.organizationSubscription = this.organizationScope.organization.subscribe(
        organization => {
          this.service.organization = organization;
          this.reload();
        }
      );
    }
  }

  get organization(): string {
    return this.service.organization;
  }

}
