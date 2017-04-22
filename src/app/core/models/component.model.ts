import { OpenfactResource } from './openfactresource.model';

export class ComponentModel extends OpenfactResource {

  id: string;

  defaultKind() {
    return 'Component';
  }
}

export class Components extends Array<ComponentModel> { }
