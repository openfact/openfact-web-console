import { ServerInfo, ServerInfos } from './../models/serverinfo.model';

import { Injectable } from "@angular/core";
import { OpenfactResourceStore } from './openfactresource.store';
import { Organization } from './../models/organization.model';
import { OrganizationService } from './../services/organization.service';
import { Organizations } from './../models/organization.model';
import { SearchResults } from './entity/search.model';
import { ServerInfoService } from './../services/serverinfo.service';

@Injectable()
export class ServerInfoStore extends OpenfactResourceStore<ServerInfo, ServerInfos, SearchResults<ServerInfo>, ServerInfoService> {

  constructor(serverInfoService: ServerInfoService) {
    super(serverInfoService, [], <SearchResults<ServerInfo>>{ items: [], totalSize: 0 }, <ServerInfo>{}, ServerInfo);
  }

  protected get kind() {
    return 'ServerInfo';
  }

}
