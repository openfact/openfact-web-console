import { Document, Documents } from './../models/document.model';
import { User, Users } from './../models/user.model';

import { DocumentService } from './../services/document.service';
import { Injectable } from '@angular/core';
import { OrganizationResourceStore } from './organizationresource.store';
import { OrganizationScope } from './../services/organization.scope';

@Injectable()
export class DocumentStore extends OrganizationResourceStore<Document, Documents, DocumentService> {

  constructor(documentService: DocumentService, organizationScope: OrganizationScope) {
    super(documentService, [], <Document>{}, organizationScope, Document);
  }

  protected get kind() {
    return 'Document';
  }

}
