import { User, Users } from './../models/user.model';

import { Injectable } from '@angular/core';
import { RealmResourceStore } from './realmresource.store';
import { RealmScope } from './../services/realm.scope';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';
import { UserService } from './../services/user.service';

@Injectable()
export class UserStore extends RealmResourceStore<User, Users, UserService> {

  constructor(userService: UserService, realmScope: RealmScope) {
    super(userService, [], <User>{}, realmScope, User);
  }

  protected get kind() {
    return 'User';
  }

}
