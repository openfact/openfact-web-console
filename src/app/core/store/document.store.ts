import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Documents } from './../models/document.model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { OrganizationStore } from './organization.store';

@Injectable()
export class DocumentStore {

  public list: Observable<Documents>;
  public resource: Observable<Document>;
  private loadId: string;
  protected _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(organizationStore: OrganizationStore) {

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


  delete(space: Space): Observable<any> {
    return this.namespaceStore.delete(space.namespace);
  }

}
