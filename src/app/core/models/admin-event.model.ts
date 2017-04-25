import { OpenfactResource } from './openfactresource.model';

export class AdminEvent extends OpenfactResource {

  id: string;

  defaultKind() {
    return 'Admin Event';
  }
}

export class AdminEvents extends Array<AdminEvent> { }
