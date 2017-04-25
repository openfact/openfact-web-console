import { Organization, Organizations } from './../models/organization.model';

import { AbstractSearchStore } from './entity/entity.search.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactSearchService } from '../services/openfact.search.service';
import { SearchCriteria } from './entity/searchcriteria.model';
import { SearchResults } from './entity/searchresults.model';

function nameOfResource(resource: any) {
  let obj = resource || {};
  let metadata = obj.metadata || {};
  return metadata.name || '';
}

export abstract class OpenfactResourceSearchStore<T extends OpenfactResource, L extends Array<T>,
  C extends SearchCriteria<T>, S extends SearchResults<T>,
  R extends OpenfactSearchService<T, L, S>> extends AbstractSearchStore<T, L, C, S, R> {

  constructor(service: R, private initialList: L, private initialSearch: S, initialCurrent: T, protected type: { new (): T; }) {
    super(service, initialList, initialSearch, initialCurrent);
  }

  /**
       * Creates a new instance of the resource type from the given data - typically received from a web socket event
       */
  instantiate(resource: any): T {
    if (resource) {
      let item = new this.type();
      item.setResource(resource);
      // lets add the Restangular crack
      return this.service.restangularize(item);
    } else {
      return null;
    }
  }

  updateResource(obj: T, resource: any): Observable<T> {
    return this.service.updateResource(obj, resource);
  }

  get defaultSearchCriteria() {
    return <C>{
      paging: {
        page: 1,
        pageSize: 10
      }
    };
  }

}
