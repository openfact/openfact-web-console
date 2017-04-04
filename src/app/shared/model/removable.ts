import { Observable } from 'rxjs/Observable';

export interface Removable {
    delete(): Observable<any>;
}
