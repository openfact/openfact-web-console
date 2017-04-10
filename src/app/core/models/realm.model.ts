import { KeycloakResource } from './keycloakresource.model';
import { OpenfactResource } from './openfactresource.model';

export class Realm extends KeycloakResource {

  realm: string;

  defaultKind() {
    return 'Realm';
  }

}

export class Realms extends Array<Realm> { }
