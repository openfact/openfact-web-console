import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { RESTService } from '../store/entity/rest.service';
import { Restangular } from 'ng2-restangular';

export abstract class OpenfactService<T extends OpenfactResource, L extends Array<T>> extends RESTService<T, L> {

  constructor(openfactRestangular: Restangular) {
    super(openfactRestangular);
  }

  get(id: string): Observable<T> {
    return super.get(id);
  }

  create(obj: T): Observable<T> {
    // let resource = obj.resource || {};
    // if (!resource.kind) {
    //     resource.kind = obj.defaultKind();
    // }
    // obj.updateResource(resource);
    return this.restangularService/*.all(this.serviceUrl)*/.post(obj);
  }

  update(obj: T): Observable<T> {
    let resource = obj.resource;
    obj.updateResource(resource);
    return this.updateResource(obj, resource);
  }

  updateResource(obj: T, resource: any) {
    let id = obj.id;
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

  abstract get serviceUrl(): string;
}
