import { Observable } from 'rxjs/Observable';

export interface Removable<T> {
    delete(obj: T): Observable<any>;
}
