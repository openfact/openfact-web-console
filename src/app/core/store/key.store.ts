import { Document, Documents } from './../models/document.model';
import { Key, Keys } from './../models/key.model';
import { User, Users } from './../models/user.model';

import { DocumentService } from './../services/document.service';
import { Injectable } from '@angular/core';
import { KeyService } from './../services/key.service';
import { Observable } from 'rxjs/Rx';
import { OrganizationResourceStore } from './organizationresource.store';
import { OrganizationScope } from './../services/organization.scope';

@Injectable()
export class KeysStore extends OrganizationResourceStore<Key, Keys, KeyService> {

  constructor(keyService: KeyService, organizationScope: OrganizationScope) {
    super(keyService, [], <Key>{}, organizationScope, Key);
  }

  protected get kind() {
    return 'Key';
  }

  load(id: string = null) {
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

  reload() {
    this.load();
  }

}
