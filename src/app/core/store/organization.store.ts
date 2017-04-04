import { Organization, Organizations } from './../models/organization.model';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizationStore extends OrganizationResourceStore<Organization, Organizations, OrganizationService> {

  public list: Observable<Organizations>;
  public resource: Observable<Organization>;
  private loadId: string;
  protected _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {

  }

  get loading(): Observable<boolean> {
    return this._loading.asObservable();
  }

  loadAll(): void {
    this.loadId = null;
    this.doLoad();
  }

  load(id: string): void {
    this.loadId = id;
    this.doLoad();
  }

  protected doLoad(): void {
    this._loading.next(true);
    this.namespaceStore.loadAll();
  }

  update(obj: Organization): Observable<Namespace> {
    return this.namespaceStore.update(obj.namespace);
  }

  updateResource(obj: Space, resource: any): Observable<Namespace> {
    return this.namespaceStore.updateResource(obj.namespace, resource);
  }

  delete(space: Organization): Observable<any> {
    return this.namespaceStore.delete(space.namespace);
  }

}
