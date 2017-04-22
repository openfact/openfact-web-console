import { OpenfactResource } from './openfactresource.model';

export class ServerInfo extends OpenfactResource {

  id: string;
  themes: Array<string>;
  componentTypes: any;

  defaultKind() {
    return 'ServerInfo';
  }
}

export class ServerInfos extends Array<ServerInfo> { }
