import { Document, Documents } from './../models/document.model';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { Inject, Injectable } from '@angular/core';
import { User, Users } from './../models/user.model';

import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';
import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { OrganizationResourceService } from './organization.resource.service';
import { OrganizationScope } from './organization.scope';
import { Restangular } from 'ng2-restangular';
import { SearchResults } from './../store/entity/search.model';
import { UserStore } from './../store/user.store';
import { pathJoin } from '../models/utils';

@Injectable()
export class DocumentService extends OrganizationResourceService<Document, Documents, SearchResults<Document>> {

  constructor(
    @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular,
    organizationScope: OrganizationScope,
    private keycloakOAuthService: KeycloakOAuthService) {
    super(openfactRestangular, organizationScope, '/documents', '/admin/organizations');
  }

  buildFileUpload(organization: string = null, config: any = {}): FileUploader {
    let url = organization ? this.serviceUrlForOrganization(organization) : this.serviceUrl;
    url = this.restangularService.all(url).all('upload').getRestangularUrl();
    const uploader = new FileUploader(Object.assign({ url: url }, config));

    this.keycloakOAuthService.getToken().then(
      (token: string) => {
        uploader.onBeforeUploadItem = (item: FileItem) => {
          uploader.setOptions({ authToken: 'Bearer ' + token });
        };        
      }
    );


    return uploader;
  }

}
