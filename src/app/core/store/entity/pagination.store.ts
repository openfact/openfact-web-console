import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

export class Pagination {

  protected _refresh: BehaviorSubject<boolean>;

  constructor(
    protected _first: BehaviorSubject<number>,
    protected _max: BehaviorSubject<number>,
    protected _totalResults: BehaviorSubject<number>) {
    this._refresh = new BehaviorSubject<boolean>(false);
  }

  get refresh(): Observable<boolean> {
    return this._refresh.asObservable();
  }

  get page() {
    return Math.floor(this._first.getValue() / this.pageSize);
  }

  get pageSize() {
    return this._max.getValue() - this._first.getValue();
  }

  set page(page: number) {
    if (page < 1) { page = 1; }
    if (page > this.totalPages) { page = this.totalPages; }
    const first = page * this.pageSize;
    const max = first + this.pageSize;
    this._first.next(first);
    this._max.next(max);
    this._refresh.next(true);
  }

  set pageSize(pageSize: number) {
    if (pageSize < 1) { pageSize = 1; }
    this._first.next(0);
    this._max.next(pageSize);
    this._refresh.next(true);
  }

  get totalPages() {
    return Math.ceil(this._totalResults.getValue() / this.pageSize);
  }

  get from() {
    return (this.page - 1) * this.pageSize + 1;
  }

  get to() {
    return (this.page - 1) * this.pageSize + this._totalResults.getValue() % this.pageSize;
  }

  nextPage() {
    this.page = this.page + 1;
  }

  previousPage() {
    this.page = this.page - 1;
  }

  firstPage() {
    this.page = 1;
  }

  lastPage() {
    this.page = this.totalPages;
  }

}
