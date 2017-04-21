import { Document, Documents } from './../models/document.model';
import { Key, Keys } from './../models/key.model';
import { User, Users } from './../models/user.model';

import { DocumentService } from './../services/document.service';
import { Injectable } from '@angular/core';
import { KeyService } from './../services/key.service';
import { Observable } from 'rxjs/Rx';
import { OrganizationResourceStore } from './organizationresource.store';
import { OrganizationScope } from './../services/organization.scope';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/search.model';

@Injectable()
export class KeysStore extends OrganizationResourceStore<Key, Keys, SearchResults<Key>, KeyService> {

  constructor(keyService: KeyService, organizationScope: OrganizationScope) {
    super(keyService, [], <SearchResults<Document>>{ items: [], totalSize: 0 }, <Document>{}, organizationScope, Document);
  }

  protected get kind() {
    return 'Key';
  }

}
