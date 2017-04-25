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

  protected _first: BehaviorSubject<number>;
  protected _max: BehaviorSubject<number>;
  protected _query: BehaviorSubject<Collections.Dictionary<string, string>>;
  protected _requiredActions: BehaviorSubject<Array<string>>;

  protected _totalSize: BehaviorSubject<number>;
  protected _criteria: DocumentCriteria;

  constructor(documentService: DocumentService, organizationScope: OrganizationScope) {
    super(documentService, [], <Document>{}, organizationScope, Document);
    this._first = new BehaviorSubject<number>(0);
    this._max = new BehaviorSubject<number>(10);
    this._query = new BehaviorSubject<Collections.Dictionary<string, string>>(new Collections.Dictionary<string, string>());
    this._requiredActions = new BehaviorSubject<Array<string>>([]);
    this._totalSize = new BehaviorSubject<number>(0);

    this._criteria = new DocumentCriteria(this._first, this._max, this._totalSize, this._query, this._requiredActions);

    this._criteria.refresh.subscribe((refresh) => {
      if (refresh) this.reload();
    });
    this._query.subscribe(() => this.reload());
    this._requiredActions.subscribe(() => this.reload());
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
        this._list.next(list.items.map((item) => this.service.restangularize(item)));
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
    let requiredActions = this._requiredActions.map((action) => action + ' ');
    let query = '';

    this._query.getValue().forEach((key: string, value: string) => {
      query = query + key + ':' + value + ' ';
    });

    return {
      requiredActions: requiredActions,
      query: query,
      first: this._first.getValue(),
      max: this._max.getValue()
    };
  }

  protected get kind() {
    return 'Document';
  }

}
