import { Inject, Injectable } from '@angular/core';
import { User, Users } from './../models/user.model';

import { KEYCLOAK_RESTANGULAR } from './keycloak.restangular';
import { RealmResourceService } from './realm.resource.service';
import { RealmScope } from './realm.scope';
import { Restangular } from 'ng2-restangular';
import { UserStore } from './../store/user.store';
import { pathJoin } from '../models/utils';

@Injectable()
export class UserService extends RealmResourceService<User, Users> {

  constructor(
    @Inject(KEYCLOAK_RESTANGULAR) keycloakRestangular: Restangular,
    realmScope: RealmScope,
    userStore: UserStore) {
    super(keycloakRestangular, realmScope, '/users', '');

    userStore.loading.subscribe(loading => {
      if (!loading) {
        // force recalculation of the URL
        this._serviceUrl = null;
      }
    })
  }

}
