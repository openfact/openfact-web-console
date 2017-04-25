import { Organization, Organizations } from './../models/organization.model';

import { AbstractStore } from './entity/entity.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KeycloakResource } from './../models/keycloakresource.model';
import { KeycloakResourceStore } from './keycloakresource.store';
import { KeycloakService } from '../services/keycloak.service';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactService } from '../services/openfact.service';
import { RealmResourceService } from '../services/realm.resource.service';
import { RealmScope } from './../services/realm.scope';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';
import { Subscription } from 'rxjs/Subscription';

export abstract class RealmResourceStore<T extends KeycloakResource, L extends Array<T>, R extends RealmResourceService<T, L>> extends KeycloakResourceStore<T, L, R> {

  private realmSubscription: Subscription;

  constructor(service: any, initialList, initialCurrent: any, public realmScope: RealmScope, type: any) {
    super(service, initialList, initialCurrent, type);
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
