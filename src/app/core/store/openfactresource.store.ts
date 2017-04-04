import { Organization, Organizations } from './../models/organization.model';

import { AbstractStore } from './entity/entity.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactService } from '../services/openfact.service';

function nameOfResource(resource: any) {
    let obj = resource || {};
    let metadata = obj.metadata || {};
    return metadata.name || '';
}

export abstract class OpenfactResourceStore<T extends OpenfactResource, L extends Array<T>, R extends OpenfactService<T, L>> extends AbstractStore<T, L, R>{

    constructor(service: R, private initialList: L, initialCurrent: T, protected type: { new (): T; }) {
        super(service, initialList, initialCurrent);
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

    update(obj: T): Observable<T> {
        return this.service.update(obj);
    }

    updateResource(obj: T, resource: any): Observable<T> {
        return this.service.updateResource(obj, resource);
    }

    delete(obj: T): Observable<any> {
        return this.service.delete(obj);
    }

    loadAll(): Observable<L> {
        super.loadAll();
        return this.list;
    }

    load(id: string): void {
        super.load(id);
    }

    listQueryParams() {
        return null;
    }

}
