import { Inject, Injectable } from '@angular/core';
import { User, Users } from './../models/user.model';

import { KEYCLOAK_RESTANGULAR } from './keycloak.restangular';
import { RealmResourceService } from './realm.resource.service';
import { RealmScope } from './realm.scope';
import { Restangular } from 'ngx-restangular';
import { SearchResults } from './../store/entity/searchresults.model';
import { UserStore } from './../store/user.store';
import { pathJoin } from '../models/utils';

@Injectable()
export class UserService extends RealmResourceService<User, Users> {

  constructor(
    @Inject(KEYCLOAK_RESTANGULAR) keycloakRestangular: Restangular,
    realmScope: RealmScope) {
    super(keycloakRestangular, realmScope, '/users', '/admin/realms');
  }

}
