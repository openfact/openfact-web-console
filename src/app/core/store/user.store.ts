import { User, Users } from './../models/user.model';

import { Injectable } from '@angular/core';
import { RealmResourceStore } from './realmresource.store';
import { RealmScope } from './../services/realm.scope';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';
import { UserService } from './../services/user.service';

@Injectable()
export class UserStore extends RealmResourceStore<User, Users, SearchCriteria<User>, SearchResults<User>, UserService> {

  constructor(userService: UserService, realmScope: RealmScope) {
    super(userService, [],
      <SearchResults<User>>{ items: [], totalSize: 0 },
      <User>{}, realmScope, User);
  }

  protected get kind() {
    return 'User';
  }

}
