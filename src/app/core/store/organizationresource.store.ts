import { Organization, Organizations } from './../models/organization.model';

import { AbstractStore } from './entity/entity.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { KeycloakResourceStore } from './keycloakresource.store';
import { KeycloakService } from '../services/keycloak.service';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactResourceStore } from "./openfactresource.store";
import { OpenfactService } from '../services/openfact.service';
import { OrganizationResourceService } from '../services/organization.resource.service';
import { OrganizationScope } from './../services/organization.scope';
import { RealmScope } from './../services/realm.scope';
import { SearchResults } from './entity/search.model';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export abstract class OrganizationResourceStore<T extends OpenfactResource, L extends Array<T>, S extends SearchResults<T>, R extends OrganizationResourceService<T, L, S>> extends OpenfactResourceStore<T, L, S, R> {

  private organizationSubscription: Subscription;

  constructor(service: any, initialList, initialSearch: any, initialCurrent: any, public organizationScope: OrganizationScope, type: any) {
    super(service, initialList, initialSearch, initialCurrent, type);
    if (this.organizationScope) {
      this.organizationSubscription = this.organizationScope.organization.subscribe(
        organization => {
          this.service.organization = organization;
          this.reload();
        },
      );
    }
  }

  get organization(): string {
    return this.service.organization;
  }

}
