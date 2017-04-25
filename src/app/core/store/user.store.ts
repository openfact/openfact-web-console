import { User, Users } from './../models/user.model';

import { Injectable } from '@angular/core';
import { RealmResourceStore } from './realmresource.store';
import { RealmScope } from './../services/realm.scope';
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
