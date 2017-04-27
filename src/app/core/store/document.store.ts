import * as Collections from 'typescript-collections';

import { Document, Documents } from './../models/document.model';
import { User, Users } from './../models/user.model';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DocumentCriteria } from './document.criteria';
import { DocumentService } from './../services/document.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OrganizationResourceStore } from './organizationresource.store';
import { OrganizationScope } from './../services/organization.scope';
import { Pagination } from './entity/pagination.store';
import { plural } from 'pluralize';

@Injectable()
export class DocumentStore extends OrganizationResourceStore<Document, Documents, DocumentService> {

  protected _totalSize: BehaviorSubject<number>;
  protected _criteria: DocumentCriteria;

  constructor(documentService: DocumentService, organizationScope: OrganizationScope) {
    super(documentService, [], <Document>{}, organizationScope, Document);
    this._totalSize = new BehaviorSubject<number>(0);

    this._criteria = new DocumentCriteria(this._totalSize);
    this._criteria.refresh.subscribe((refresh) => {
      if (refresh) this.reload();
    });
  }

  get criteria() {
    return this._criteria;
  }

  loadAll(): Observable<Documents> {
    this._loadId = null;
    this._loading.next(true);
    let listObserver = this.service.list(this.listQueryParams());
    listObserver.subscribe(
      (list: any) => {
        let parent = list.parentResource;
        let route = list.route;
        let fromServer = list.fromServer;
        let collection = list.restangularCollection;
        let reqParams = list.reqParams;

        this._list.next(list.items.map((item) => {
          return this.service.restangularize(item, parent, route, fromServer, collection, reqParams);
        }));
        this._totalSize.next(list.totalSize);
        this._loading.next(false);
      },
      (error) => {
        console.log('Error retrieving ' + plural(this.kind) + ': ' + error);
        this._loading.next(false);
      });
    return listObserver;
  }

  listQueryParams() {
    return {
      requiredActions: this._criteria.requiredActions,
      query: this._criteria.query,
      first: this._criteria.first,
      max: this._criteria.max
    };
  }

  protected get kind() {
    return 'Document';
  }

}
