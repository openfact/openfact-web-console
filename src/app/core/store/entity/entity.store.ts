import { BaseEntity } from './entity.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Paging } from './paging.model';
import { RESTService } from './rest.service';
import { SearchCriteria } from './searchcriteria.model';
import { SearchResults } from './search.model';
import { plural } from 'pluralize';

export abstract class AbstractStore<T extends BaseEntity, L extends Array<T>, S extends SearchResults<T>, R extends RESTService<T, L, S>> {

  protected _list: BehaviorSubject<L>;

  protected _search: BehaviorSubject<S>;

  protected _isSearch: boolean = null;

  protected _paging = new Paging();

  protected _hasMore: BehaviorSubject<boolean> = new BehaviorSubject(false);

  protected _current: BehaviorSubject<T>;

  protected _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  protected _loadId: string = null;

  constructor(protected service: R, initialList: L, initialSearch: S, initialCurrent: T) {
    this._list = new BehaviorSubject(initialList);
    this._search = new BehaviorSubject(initialSearch);
    this._current = new BehaviorSubject(initialCurrent);
  }

  protected abstract get kind(): string;

  protected abstract get searchPath(): string;

  get list(): Observable<L> { return this._list.asObservable(); }

  get search(): Observable<S> { return this._search.asObservable(); }

  get hasMore(): Observable<boolean> { return this._hasMore.asObservable(); }

  get paging(): Paging { return this._paging; }

  set paging(paging: Paging) {
    this._paging = paging;
    this.searchAll();
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
    this._isSearch = false;
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

  searchAll(criteria: any = null): Observable<S> {
    this._isSearch = true;
    this._hasMore.next(false);
    this._loadId = null;
    this._loading.next(true);
    let searchObserver = this.service.search(this.searchCriteria(criteria), this.searchPath);
    searchObserver.subscribe(
      (search) => {
        this._hasMore.next(search.totalSize > this._paging.maxNumberOfItems());
        this._search.next(search);
        this._loading.next(false);
      },
      (error) => {
        console.log('Error searching ' + plural(this.kind) + ': ' + error);
        this._hasMore.next(false);
        this._loading.next(false);
      }
    );
    return searchObserver;
  }

  load(id: string) {
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
    let isSearch = this._isSearch;
    if (id) {
      this.load(id);
    } else if (isSearch) {
      this.searchAll();
    } else {
      this.loadAll();
    }
  }

  listQueryParams() {
    return null;
  }

  nextPage() {
    this._paging.nextPage();
    this.searchAll();
  }

  previousPage() {
    this._paging.previousPage();
    this.searchAll();
  }

  searchCriteria(criteria: any): SearchCriteria {
    return <SearchCriteria>Object.assign(criteria, { paging: this._paging });
  }

}
