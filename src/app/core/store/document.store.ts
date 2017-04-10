import { Document, Documents } from './../models/document.model';
import { User, Users } from './../models/user.model';

import { DocumentService } from './../services/document.service';
import { Injectable } from '@angular/core';
import { OrganizationResourceStore } from './organizationresource.store';
import { OrganizationScope } from './../services/organization.scope';
import { UserService } from './../services/user.service';

@Injectable()
export class DocumentStore extends OrganizationResourceStore<Document, Documents, DocumentService> {

  constructor(userService: UserService, organizationScope: OrganizationScope) {
    super(userService, [], <User>{}, organizationScope, User);
  }

  protected get kind() {
    return 'Document';
  }

}
