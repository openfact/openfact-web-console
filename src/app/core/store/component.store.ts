import { ComponentModel, Components } from './../models/component.model';
import { Document, Documents } from './../models/document.model';
import { Key, Keys } from './../models/key.model';
import { User, Users } from './../models/user.model';

import { ComponentService } from './../services/component.service';
import { DocumentService } from './../services/document.service';
import { Injectable } from '@angular/core';
import { KeyService } from './../services/key.service';
import { Observable } from 'rxjs/Rx';
import { OrganizationResourceStore } from './organizationresource.store';
import { OrganizationScope } from './../services/organization.scope';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';

@Injectable()
export class ComponentStore extends OrganizationResourceStore<ComponentModel, Components, SearchCriteria<ComponentModel>, SearchResults<ComponentModel>, ComponentService> {

  constructor(componentService: ComponentService, organizationScope: OrganizationScope) {
    super(componentService, [],
      <SearchResults<ComponentModel>>{ items: [], totalSize: 0 },
      <ComponentModel>{}, organizationScope, ComponentModel);
  }

  protected get kind() {
    return 'Component';
  }

}
