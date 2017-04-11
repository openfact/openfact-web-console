export class Paging {

  private _page: number;
  private _pageSize: number;

  constructor(page: number = 1, pageSize: number = 10) {
    this._page = page;
    this._pageSize = pageSize;
  }

  nextPage() {
    this._pageSize++;
  }

  previousPage() {
    this._pageSize--;
  }

  jumpTo(page: number) {
    this._page = page;
  }

  set pageSize(pageSize: number) {
    this._pageSize = pageSize;
  }

  maxNumberOfItems() {
    return this._page * this._pageSize;
  }

}
