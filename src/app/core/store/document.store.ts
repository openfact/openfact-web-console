import { Document, Documents } from './../models/document.model';
import { User, Users } from './../models/user.model';

import { DocumentService } from './../services/document.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OrganizationResourceStore } from './organizationresource.store';
import { OrganizationScope } from './../services/organization.scope';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';

@Injectable()
export class DocumentStore extends OrganizationResourceStore<Document, Documents, SearchCriteria<Document>, SearchResults<Document>, DocumentService> {

  constructor(documentService: DocumentService, organizationScope: OrganizationScope) {
    super(documentService, [],
      <SearchResults<Document>>{ items: [], totalSize: 0 },
      <Document>{}, organizationScope, Document);
  }

  protected get kind() {
    return 'Document';
  }

}
