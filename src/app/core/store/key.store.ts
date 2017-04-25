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
import { SearchResults } from './entity/searchresults.model';

@Injectable()
export class KeysStore extends OrganizationResourceStore<Key, Keys, SearchCriteria<Key>, SearchResults<Key>, KeyService> {

  constructor(keyService: KeyService, organizationScope: OrganizationScope) {
    super(keyService, [],
      <SearchResults<Key>>{ items: [], totalSize: 0 },
      <Key>{}, organizationScope, Key);
  }

  protected get kind() {
    return 'Key';
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
