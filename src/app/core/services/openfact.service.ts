import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { RESTService } from '../store/entity/rest.service';
import { Restangular } from 'ngx-restangular';
import { SearchResults } from './../store/entity/search.model';

export abstract class OpenfactService<T extends OpenfactResource, L extends Array<T>, S extends SearchResults<T>> extends RESTService<T, L, S> {

  constructor(openfactRestangular: Restangular) {
    super(openfactRestangular);
  }

  get(id: string): Observable<T> {
    return super.get(id);
  }

  create(obj: T): Observable<T> {
    return this.restangularService.post(obj);
  }

  update(obj: T): Observable<T> {
    let resty: any = obj;
    return resty.customPUT(obj);
  }

  updateResource(obj: T, resource: any) {
    let id = obj.id;
    console.log('Updating key ' + id + ' with value ' + JSON.stringify(resource, null, '  '));
    let resty: any = obj;
    return resty.customPUT(resource);
  }

  delete(obj: T): any {
    let resty: any = obj;
    return resty.customDELETE();
  }

  defaultKind() {
    return 'Organization';
  }

  get searchPath(): string {
    return 'search';
  };

  abstract get serviceUrl(): string;
}
