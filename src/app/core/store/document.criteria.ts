import * as Collections from 'typescript-collections';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Pagination } from './entity/pagination.store';

export class DocumentCriteria extends Pagination {

  constructor(
    _first: BehaviorSubject<number>,
    _max: BehaviorSubject<number>,
    _totalResults: BehaviorSubject<number>,
    protected _query: BehaviorSubject<Collections.Dictionary<string, string>>,
    protected _requiredActions: BehaviorSubject<Array<string>>) {
    super(_first, _max, _totalResults);
  }

  addQuery(key: string, value: string) {
    const map = this._query.getValue();
    map.setValue(key, value);

    this._query.next(map);
  }

  removeQuery(key: string | Array<string>) {
    const map = this._query.getValue();
    if (key instanceof Array) {
      key.forEach(k => map.remove(k));
    } else {
      map.remove(key);
    }
    this._query.next(map);
  }

  addRequiredAction(requiredAction: string) {
    const list = this._requiredActions.getValue();
    const index = list.indexOf(requiredAction);
    if (index == -1) {
      list.push(requiredAction);
    }
    this._requiredActions.next(list);
  }

}
