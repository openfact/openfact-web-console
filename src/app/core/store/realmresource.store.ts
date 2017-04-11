import { Organization, Organizations } from './../models/organization.model';

import { AbstractStore } from './entity/entity.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { KeycloakResource } from './../models/keycloakresource.model';
import { KeycloakResourceStore } from './keycloakresource.store';
import { KeycloakService } from '../services/keycloak.service';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactService } from '../services/openfact.service';
import { RealmResourceService } from '../services/realm.resource.service';
import { RealmScope } from './../services/realm.scope';
import { SearchResults } from './entity/search.model';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export abstract class RealmResourceStore<T extends KeycloakResource, L extends Array<T>, S extends SearchResults<T>, R extends RealmResourceService<T, L, S>> extends KeycloakResourceStore<T, L, S, R> {

  private realmSubscription: Subscription;

  constructor(service: any, initialList: any, initialSearch: S, initialCurrent: any, public realmScope: RealmScope, type: any) {
    super(service, initialList, initialSearch, initialCurrent, type);
    if (this.realmScope) {
      this.realmSubscription = this.realmScope.realm.subscribe(
        realm => {
          this.service.realm = realm;
          this.reload();
        },
      );
    }
  }

  get realm(): string {
    return this.service.realm;
  }

}
