import { OpenfactResource } from './openfactresource.model';

export class Key extends OpenfactResource {

  id: string;

  defaultKind() {
    return 'Key';
  }
}

export class Keys extends Array<Key> { }
