import { BaseEntity } from './entity.model';
import { Observable } from 'rxjs/Observable';
import { RESTService } from './rest.service';
import { Restangular } from 'ngx-restangular';
import { SearchResults } from './searchresults.model';

export abstract class RESTSearchService<T extends BaseEntity, L extends Array<T>, S extends SearchResults<T>> extends RESTService<T, L>{

  protected constructor(protected restangularService: Restangular) {
    super(restangularService);
  }

  protected abstract get searchPath(): string;

  search(criteria: any = null): Observable<S> {
    return this.restangularService.all(this.searchPath).post(criteria);
  }

}
