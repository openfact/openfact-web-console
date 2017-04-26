import { Document, Documents } from './../models/document.model';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { Inject, Injectable } from '@angular/core';
import { User, Users } from './../models/user.model';

import { KeycloakOAuthService } from './../../keycloak/keycloak.oauth.service';
import { OPENFACT_RESTANGULAR } from './openfact.restangular';
import { Observable } from 'rxjs/Rx';
import { OrganizationResourceService } from './organization.resource.service';
import { OrganizationScope } from './organization.scope';
import { Restangular } from 'ngx-restangular';
import { UserStore } from './../store/user.store';
import { pathJoin } from '../models/utils';

@Injectable()
export class DocumentService extends OrganizationResourceService<Document, Documents> {

  private uploader: FileUploader;

  constructor(
    @Inject(OPENFACT_RESTANGULAR) openfactRestangular: Restangular,
    organizationScope: OrganizationScope,
    private keycloakOAuthService: KeycloakOAuthService) {
    super(openfactRestangular, organizationScope, '/documents', '/admin/organizations');
  }

  list(queryParams: any = null, organization: string = null): Observable<any> {
    let url = organization ? this.serviceUrlForOrganization(organization) : this.serviceUrl;
    if (url) {
      return this.restangularService.all(url).customGET('', queryParams);
    } else {
      return Observable.create((observer) => observer.next({ items: [], totalSize: 0 }));
    }
  }

  private refreshUploader() {
    if (this.uploader) {
      this.uploader.setOptions({
        url: this.restangularService.all(this.serviceUrl).all('upload').getRestangularUrl()
      });
    }
  }

  uploadAll(uploader: FileUploader) {
    this.keycloakOAuthService.getToken().then(
      (token: string) => {
        uploader.setOptions({ authToken: 'Bearer ' + token });
        uploader.uploadAll();
      }
    );
  }

  fileUpload() {
    if (!this.uploader) {
      this.uploader = new FileUploader({});
      this.refreshUploader();
    }
    return this.uploader;
  }

  buildFileUpload(organization: string = null, config: any = {}): FileUploader {
    let url = organization ? this.serviceUrlForOrganization(organization) : this.serviceUrl;

    url = this.restangularService.all(url).all('upload').getRestangularUrl();
    return new FileUploader(Object.assign({ url: url }, config));
  }

  onOrganizationChanged() {
    super.onOrganizationChanged();
    this.refreshUploader();
  }


  restangularize(item: Document, parentX = null, routeX = null, fromServerX = null, collectionX = null, reqParamsX = null): Document {
    let restangularService = this.restangularService;
    let parent = restangularService.parentResource;
    let route = restangularService.route;
    let fromServer = restangularService.fromServer;
    let collection = restangularService.restangularCollection;
    let reqParams = restangularService.reqParams;
    return this.restangularService.restangularizeElement(parentX || parent, item, routeX || route, fromServerX || fromServer, collectionX || collection, reqParamsX || reqParams);
  }

}
