import { BaseEntity } from './entity.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SearchResults } from './searchresults.model';
import { Subscription } from 'rxjs/Subscription';

export interface Paging {
  page: number;
  pageSize: number;
}

export interface SearchCriteria<T extends BaseEntity> {
  filterText?: string;
  paging: Paging;
}

export class SearchCriteriaWrapper<T extends BaseEntity, C extends SearchCriteria<T>, S extends SearchResults<T>> {

  private _totalPages: number;
  private _from: number;
  private _to: number;

  private subscription: Subscription;

  constructor(private _criteria: BehaviorSubject<C>, private searchResults: BehaviorSubject<S>) { }

  watchChanges() {
    if (!this.subscription) {
      this.subscription = this.searchResults.subscribe((searchResults) => {
        this._from = (this.page - 1) * this.pageSize + 1;
        this._to = (this.page - 1) * this.pageSize + searchResults.totalSize % this.pageSize;
        this._totalPages = Math.ceil(searchResults.totalSize / this.pageSize);
      });
    }
  }

  unwatchChanges() {
    if (this.subscription) {
      this.subscription.closed
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  get criteria() {
    return this._criteria.getValue();
  }

  get page() {
    if (this.criteria) {
      return this.criteria.paging.page;
    }
    return 0;
  }

  get pageSize() {
    if (this.criteria) {
      return this.criteria.paging.pageSize;
    }
    return 0;
  }

  get totalPages() {
    if (this.criteria) {
      return this._totalPages;
    }
    return 0;
  }

  get from() {
    if (this.criteria) {
      return this._from;
    }
    return 0;
  }

  get to() {
    if (this.criteria) {
      return this._to;
    }
    return 0;
  }

  nextPage() {
    this.setPage(this.page + 1);
  }

  previousPage() {
    this.setPage(this.page - 1);
  }

  firstPage() {
    this.setPage(1);
  }

  lastPage() {
    this.setPage(this.totalPages);
  }

  setPage(page: number) {
    if (page < 1) { page = 1; }
    if (page > this.totalPages) { page = this.totalPages; }
    const criteria = this.criteria;
    criteria.paging.page = page;
    this._criteria.next(criteria);
  }

  setPageSize(pageSize: number) {
    if (pageSize < 1) { pageSize = 1; }
    const criteria = this.criteria;
    criteria.paging.pageSize = pageSize;
    this._criteria.next(criteria);
  }

}

