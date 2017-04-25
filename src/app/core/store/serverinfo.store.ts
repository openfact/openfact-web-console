import { ServerInfo, ServerInfos } from './../models/serverinfo.model';

import { Injectable } from "@angular/core";
import { OpenfactResourceStore } from './openfactresource.store';
import { Organization } from './../models/organization.model';
import { OrganizationService } from './../services/organization.service';
import { Organizations } from './../models/organization.model';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';
import { ServerInfoService } from './../services/serverinfo.service';

@Injectable()
export class ServerInfoStore extends OpenfactResourceStore<ServerInfo, ServerInfos, SearchCriteria<ServerInfo>, SearchResults<ServerInfo>, ServerInfoService> {

  constructor(serverInfoService: ServerInfoService) {
    super(serverInfoService, [],
      <SearchResults<ServerInfo>>{ items: [], totalSize: 0 },
      <ServerInfo>{}, ServerInfo);
  }

  protected get kind() {
    return 'ServerInfo';
  }

  emptyLoad() {
    this._loadId = '';
    this._loading.next(true);
    this.service.get('').subscribe(
      (entity) => {
        this._current.next(entity);
        this._loading.next(false);
      },
      (error) => {
        console.log('Error retrieving ' + this.kind + ': ' + error);
        this._loading.next(false);
      });
  }

}
