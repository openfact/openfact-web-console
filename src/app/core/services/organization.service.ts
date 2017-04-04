import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrganizationResourceModel } from './../models/organizationresource.model';
import { RESTService } from '../store/entity/rest.service';
import { Restangular } from 'ng2-restangular';

export abstract class OrganizationService<T extends OrganizationResourceModel, L extends Array<T>> extends RESTService<T, L> {

    constructor(organizationRestangular: Restangular) {
        super(organizationRestangular);
    }

    get(id: string): Observable<T> {
        return super.get(id);
    }

    create(obj: T): Observable<T> {
        obj.updateResource();
        return this.restangularService.all(this.serviceUrl).post(obj);
    }

    update(obj: T): Observable<T> {        
        obj.updateResource();
        return this.updateResource(obj, obj);
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
