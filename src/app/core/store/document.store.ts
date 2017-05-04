import * as Collections from 'typescript-collections';

import { Document, Documents } from './../models/document.model';
import { User, Users } from './../models/user.model';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
  protected _pagination: Pagination;

  protected _query: Collections.Dictionary<string, string>;
  protected _requiredActions: Collections.Set<string>;

  constructor(documentService: DocumentService, organizationScope: OrganizationScope) {
    super(documentService, [], <Document>{}, organizationScope, Document);
    this._totalSize = new BehaviorSubject<number>(0);

    this._query = new Collections.Dictionary<string, string>();
    this._requiredActions = new Collections.Set<string>();

    this._pagination = new Pagination(this._totalSize);
    this._pagination.refresh.subscribe((refresh) => {
      if (refresh) this.reload();
    });
  }

  /**
   *
   */
  get query() {
    let query = '';
    this._query.forEach((key: string, value: string) => {
      if (value) { query = query + key + ':' + value + ' '; }
    });
    return query;
  }

  get requiredActions() {
    return this._requiredActions.toArray();
  }

  addQuery(key: string, value: string) {
    this._query.setValue(key, value);
    this.pagination.clear();
  }

  removeQuery(key: string | Array<string>) {
    if (key instanceof Array) {
      key.forEach(k => this._query.remove(k));
    } else {
      this._query.remove(key);
    }
    this.pagination.clear();
  }

  addRequiredAction(requiredAction: string) {
    this._requiredActions.add(requiredAction);
    this.pagination.clear();
  }

  removeRequiredAction(requiredAction: string) {
    this._requiredActions.remove(requiredAction);
    this.pagination.clear();
  }

  /**
   *
   */
  get pagination() {
    return this._pagination;
  }

  loadAll(): Observable<Documents> {
    this._loadId = null;
    this._loading.next(true);
    const listObserver = this.service.list(this.listQueryParams());
    listObserver.subscribe(
      (list: any) => {
        const parent = list.parentResource;
        const route = list.route;
        const fromServer = list.fromServer;
        const collection = list.restangularCollection;
        const reqParams = list.reqParams;

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
      requiredActions: this.requiredActions,
      query: this.query,
      first: this._pagination.first,
      max: this._pagination.max
    };
  }

  protected get kind() {
    return 'Document';
  }

}
