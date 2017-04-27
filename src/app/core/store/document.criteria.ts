import * as Collections from 'typescript-collections';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Pagination } from './entity/pagination.store';

export class DocumentCriteria extends Pagination {

  protected _query: Collections.Dictionary<string, string>;
  protected _requiredActions: Collections.Set<string>;

  constructor(_totalResults: BehaviorSubject<number>) {
    super(_totalResults);

    this._query = new Collections.Dictionary<string, string>();
    this._requiredActions = new Collections.Set<string>();;
  }

  get query() {
    let query = '';

    this._query.forEach((key: string, value: string) => {
      if (value) {
        query = query + key + ':' + value + ' ';
      }
    });
    return query;
  }

  get requiredActions() {
    return this._requiredActions.toArray();
  }

  addQuery(key: string, value: string) {
    this._query.setValue(key, value);
    this._first.next(0);
  }

  removeQuery(key: string | Array<string>) {
    if (key instanceof Array) {
      key.forEach(k => this._query.remove(k));
    } else {
      this._query.remove(key);
    }
    this._first.next(0);
  }

  addRequiredAction(requiredAction: string) {
    this._requiredActions.add(requiredAction);
    this._first.next(0);
  }

  removeRequiredAction(requiredAction: string) {
    this._requiredActions.remove(requiredAction);
    this._first.next(0);
  }

}
