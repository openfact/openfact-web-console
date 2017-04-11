export class Paging {

  public page: number;
  public pageSize: number;

  constructor(page: number = 1, pageSize: number = 10) {
    this.page = page;
    this.pageSize = pageSize;
  }

  nextPage() {
    this.pageSize++;
  }

  previousPage() {
    this.pageSize--;
  }

  jumpTo(page: number) {
    this.page = page;
  }

  maxNumberOfItems() {
    return this.page * this.pageSize;
  }

  pointerFrom() {
    return (this.page - 1) * this.pageSize;
  }

  pointerTo() {
    return this.page * this.pageSize;
  }

}
