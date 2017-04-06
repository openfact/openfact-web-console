import { Organization, Organizations } from './../models/organization.model';

import { AbstractStore } from './entity/entity.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { KeycloakResource } from './../models/keycloakresource.model';
import { KeycloakService } from '../services/keycloak.service';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactService } from '../services/openfact.service';

function nameOfResource(resource: any) {
    let obj = resource || {};
    let metadata = obj.metadata || {};
    return metadata.name || '';
}

export abstract class KeycloakResourceStore<T extends KeycloakResource, L extends Array<T>, R extends KeycloakService<T, L>> extends AbstractStore<T, L, R>{

    constructor(service: R, private initialList: L, initialCurrent: T, protected type: { new (): T; }) {
        super(service, initialList, initialCurrent);
    }

    /**
       * Creates a new instance of the resource type from the given data - typically received from a web socket event
       */
    instantiate(resource: any): T {
        if (resource) {
            return this.service.restangularize(resource);
        } else {
            return null;
        }
    }

    update(obj: T): Observable<T> {
        return this.service.update(obj);
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
