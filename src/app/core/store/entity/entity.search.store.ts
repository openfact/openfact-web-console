import { AbstractStore } from './entity.store';
import { BaseEntity } from './entity.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RESTService } from './rest.service';
import { SearchResults } from './search.model';
import { plural } from 'pluralize';

export abstract class AbstractSearchStore<T extends BaseEntity, L extends Array<T>, S extends SearchResults<T>, R extends RESTService<T, L>> extends AbstractStore<T, L, R> {

    protected _search: BehaviorSubject<S>;

    protected _isSearch: boolean = null;

    constructor(protected service: R, initialList: L, initialSearch: S, initialCurrent: T) {
        super(service, initialList, initialCurrent);
        this._search = new BehaviorSubject(initialSearch);
    }

    protected abstract get searchPath(): string;

    get search(): Observable<S> { return this._search.asObservable(); }

    searchAll(): Observable<S> {
        this._loadId = null;
        this._loading.next(true);
        let searchResultObserver = this.service.execute(this.listQueryParams(), this.searchPath);
        searchResultObserver.subscribe(
            (searchResult) => {
                this._search.next(searchResult);
                this._loading.next(false);
            },
            (error) => {
                console.log('Error retrieving ' + plural(this.kind) + ': ' + error);
                this._loading.next(false);
            });
        return searchResultObserver;
    }

    loadAll(): Observable<L> {
        this._isSearch = false;
        return super.loadAll();
    }

    load(id: string) {
        this._isSearch = false;
        return super.load(id);
    }

    reload() {
        if (!this._isSearch) {
            super.reload();
        } else {
            this.searchAll();
        }
    }

}
