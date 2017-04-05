import { Observable } from 'rxjs/Observable';

export interface Removable<T> {
    delete(): Observable<any>;
}
