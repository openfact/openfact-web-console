import { SearchCriteria, SearchCriteriaWrapper } from './searchcriteria.model';

import { BaseEntity } from './entity.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RESTService } from './rest.service';
import { SearchResults } from './searchresults.model';
import { plural } from 'pluralize';

export abstract class AbstractStore<T extends BaseEntity, L extends Array<T>, C extends SearchCriteria<T>, S extends SearchResults<T>, R extends RESTService<T, L, S>> {

  protected _list: BehaviorSubject<L>;

  protected _search: BehaviorSubject<S>;
  protected _criteria: BehaviorSubject<C> = new BehaviorSubject<C>(null);

  protected _current: BehaviorSubject<T>;
  protected _loadId: string = null;

  protected _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(protected service: R, initialList: L, initialSearch: S, initialCurrent: T) {
    this._list = new BehaviorSubject(initialList);
    this._search = new BehaviorSubject(initialSearch);
    this._current = new BehaviorSubject(initialCurrent);

    this._criteria.subscribe((criteria) => {
      if (criteria) {
        this.searchAllExecute(criteria);
      }
    });
  }

  protected abstract get kind(): string;

  protected get defaultSearchCriteria() {
    return <C>{ paging: { page: 1, pageSize: 10 } };
  }

  get list(): Observable<L> { return this._list.asObservable(); }

  get search(): Observable<S> { return this._search.asObservable(); }

  get criteria(): SearchCriteriaWrapper<T, C, S> {
    return new SearchCriteriaWrapper<T, C, S>(this._criteria, this._search);
  }

  get resource(): Observable<T> { return this._current.asObservable(); }

  get loading(): Observable<boolean> { return this._loading.asObservable(); }

  delete(obj: T): Observable<any> {
    return this.service.delete(obj);
  }

  update(obj: T): Observable<T> {
    return this.service.update(obj);
  }

  loadAll(): Observable<L> {
    this._criteria.next(null);
    this._loadId = null;

    this._loading.next(true);
    let listObserver = this.service.list(this.listQueryParams());
    listObserver.subscribe(
      (list) => {
        this._list.next(list);
        this._loading.next(false);
      },
      (error) => {
        console.log('Error retrieving ' + plural(this.kind) + ': ' + error);
        this._loading.next(false);
      });
    return listObserver;
  }

  searchAll(criteria: C = null) {
    this._loadId = null;
    this._criteria.next(criteria || this._criteria.getValue() || this.defaultSearchCriteria);
  }

  protected searchAllExecute(criteria: SearchCriteria<T>): Observable<S> {
    this._loading.next(true);
    let searchObserver = this.service.search(criteria);
    searchObserver.subscribe(
      (search) => {
        this._search.next(search);
        this._loading.next(false);
      },
      (error) => {
        console.log('Error searching ' + plural(this.kind) + ': ' + error);
        this._loading.next(false);
      }
    );
    return searchObserver;
  }

  load(id: string) {
    this._criteria.next(null);

    this._loadId = id;
    this._loading.next(true);
    this.service.get(id).subscribe(
      (entity) => {
        this._current.next(entity);
        this._loading.next(false);
      },
      (error) => {
        console.log('Error retrieving ' + this.kind + ': ' + error);
        this._loading.next(false);
      });
  }

  reload() {
    let id = this._loadId;
    let criteria = this._criteria.getValue();
    if (id) {
      this.load(id);
    } else if (criteria) {
      this.searchAll();
    } else {
      this.loadAll();
    }
  }

  listQueryParams() {
    return null;
  }

}
