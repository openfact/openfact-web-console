import { OpenfactResource } from './openfactresource.model';

export class Key extends OpenfactResource {

  id: string;
  keys: any;
  active: any;

  defaultKind() {
    return 'Key';
  }
}

export class Keys extends Array<Key> { }
