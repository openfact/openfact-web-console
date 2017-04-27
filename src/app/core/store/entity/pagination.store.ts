import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

export class Pagination {

  protected _first: BehaviorSubject<number>;
  protected _max: BehaviorSubject<number>;

  protected _refresh: BehaviorSubject<boolean>;

  constructor(
    protected _totalResults: BehaviorSubject<number>) {
    this._first = new BehaviorSubject<number>(0);
    this._max = new BehaviorSubject<number>(10);

    this._refresh = new BehaviorSubject<boolean>(false);
  }

  get first() {
    return this._first.getValue();
  }

  get max() {
    return this._max.getValue();
  }

  protected emitRefresh() {
    this._refresh.next(true);
  }

  get refresh(): Observable<boolean> {
    return this._refresh.asObservable();
  }

  get page() {
    return Math.ceil((this._first.getValue() + 1) / this.pageSize);
  }

  get pageSize() {
    return this._max.getValue();
  }

  set page(page: number) {
    if (page < 1) { page = 1; }
    if (page > this.totalPages) { page = this.totalPages; }
    this._first.next((page - 1) * this.pageSize);
    this.emitRefresh();
  }

  set pageSize(pageSize: number) {
    if (pageSize < 1) { pageSize = 1; }
    this._first.next(0);
    this._max.next(pageSize);
    this.emitRefresh();
  }

  get totalSize() {
    return this._totalResults.getValue();
  }

  get totalPages() {
    return Math.ceil(this._totalResults.getValue() / this.pageSize);
  }

  get from() {
    return this._first.getValue() + 1;
  }

  get to() {
    return this._first.getValue() + this._max.getValue();
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
