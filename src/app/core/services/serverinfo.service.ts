import { Inject, Injectable } from '@angular/core';
import { ServerInfo, ServerInfos } from './../models/serverinfo.model';

import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { OpenfactService } from './openfact.service';
import { Restangular } from 'ngx-restangular';
import { SearchResults } from './../store/entity/searchresults.model';

const serverInfoUrl = '/admin/serverinfo';

@Injectable()
export class ServerInfoService extends OpenfactService<ServerInfo, ServerInfos, SearchResults<ServerInfo>> {

  constructor( @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular) {
    super(openfactRestangular.service(serverInfoUrl));
  }

  get serviceUrl(): string {
    return serverInfoUrl;
  }

}

