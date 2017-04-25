import { SearchCriteria, SearchCriteriaWrapper } from './searchcriteria.model';

import { AbstractStore } from './entity.store';
import { BaseEntity } from './entity.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RESTSearchService } from './rest.search.service';
import { SearchResults } from './searchresults.model';
import { Subscription } from 'rxjs/Subscription';
import { plural } from 'pluralize';

export abstract class AbstractSearchStore<T extends BaseEntity, L extends Array<T>,
  C extends SearchCriteria<T>, S extends SearchResults<T>,
  R extends RESTSearchService<T, L, S>> extends AbstractStore<T, L, R> {

  protected _search: BehaviorSubject<S>;

  protected _criteria: BehaviorSubject<C> = new BehaviorSubject<C>(null);

  protected _criteriaWatcher: SearchCriteriaWrapper<T, C, S>;

  protected _criteriaSubscription: Subscription;

  constructor(protected service: R, initialList: L, initialSearch: S, initialCurrent: T) {
    super(service, initialList, initialCurrent);
    this._search = new BehaviorSubject(initialSearch);
    this._criteriaWatcher = new SearchCriteriaWrapper<T, C, S>(this._criteria, this._search);
  }

  protected abstract get defaultSearchCriteria(): C;

  get search(): Observable<S> { return this._search.asObservable(); }

  get criteria(): SearchCriteriaWrapper<T, C, S> {
    return this._criteriaWatcher;
  }

  loadAll(): Observable<L> {
    if (this._criteriaSubscription) {
      this._criteriaSubscription.unsubscribe();
      this._criteriaSubscription = null;
    }
    this._criteria.next(null);
    this._criteriaWatcher.unwatchChanges();

    return super.loadAll();
  }

  searchAll(criteria: C = null) {
    if (!this._criteriaSubscription) {
      this._criteriaSubscription = this._criteria.subscribe((newCriteria) => this.searchAllExecute(newCriteria));
    }
    this._criteriaWatcher.watchChanges();

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
    if (this._criteriaSubscription) {
      this._criteriaSubscription.unsubscribe();
      this._criteriaSubscription = null;
    }
    this._criteria.next(null);
    this._criteriaWatcher.unwatchChanges();

    super.load(id);
  }

  reload() {
    let id = this._loadId;
    let criteria = this._criteriaSubscription;
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
