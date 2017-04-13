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
  protected _totalPages: BehaviorSubject<number> = new BehaviorSubject(1);

  protected _current: BehaviorSubject<T>;

  protected _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  protected _loadId: string = null;

  constructor(protected service: R, initialList: L, initialSearch: S, initialCurrent: T) {
    this._list = new BehaviorSubject(initialList);
    this._search = new BehaviorSubject(initialSearch);
    this._current = new BehaviorSubject(initialCurrent);
  }

  protected abstract get kind(): string;

  get list(): Observable<L> { return this._list.asObservable(); }

  get search(): Observable<S> { return this._search.asObservable(); }

  get hasMore(): Observable<boolean> { return this._hasMore.asObservable(); }

  get totalPages(): Observable<number> { return this._totalPages.asObservable(); }

  get paging(): Paging { return this._paging; }

  set paging(paging: Paging) {
    this._paging = paging;
    this.searchAll();
  }

  changePage(page: number) {
    this._paging.page = page;
    this.searchAll();
  }

  changePageSize(pageSize: number) {
    this._paging.pageSize = pageSize;
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
    console.log("AbstractStore[loadAll]");

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
    console.log("AbstractStore[searchAll]");
    
    this._isSearch = true;
    this._hasMore.next(false);
    this._loadId = null;
    this._loading.next(true);
    let searchObserver = this.service.search(this.searchCriteria(criteria));
    searchObserver.subscribe(
      (search) => {
        this._hasMore.next(search.totalSize > this._paging.maxNumberOfItems());
        this._totalPages.next(Math.ceil((search.totalSize + this._paging.pageSize - 1) / this._paging.pageSize));
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
      console.log("AbstractStore[reload] id");
      this.load(id);
    } else if (isSearch) {
      console.log("AbstractStore[reload] searchAll");
      this.searchAll();
    } else {
      console.log("AbstractStore[reload] loadAll");
      this.loadAll();
    }
  }

  listQueryParams() {
    return null;
  }

  firstPage() {
    if (this._paging.page > 1) {
      this.changePage(1);
    }
  }

  previousPage() {
    if (this._paging.page > 1) {
      this._paging.previousPage();
      this.changePage(this._paging.page);
    }
  }

  nextPage() {
    if (this._hasMore.getValue()) {
      this._paging.nextPage()
      this.changePage(this._paging.page);
    }
  }

  lastPage() {
    if (this._paging.pageSize < this._totalPages.getValue()) {
      this.changePage(this._totalPages.getValue());
    }
  }

  searchCriteria(criteria: any): SearchCriteria {
    return <SearchCriteria>Object.assign(criteria || {}, { paging: this._paging });
  }

}
