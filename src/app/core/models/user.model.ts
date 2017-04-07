import { KeycloakResource } from './keycloakresource.model';
import { OpenfactResource } from './openfactresource.model';

export class User extends KeycloakResource {

  username: string;
  attributes: Map<string, Array<string>>;

  defaultKind() {
    return 'User';
  }

}

export class Users extends Array<User> {

}
