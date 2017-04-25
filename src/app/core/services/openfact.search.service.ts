import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactService } from './openfact.service';
import { RESTSearchService } from './../store/entity/rest.search.service';
import { Restangular } from 'ngx-restangular';
import { SearchResults } from './../store/entity/searchresults.model';

export abstract class OpenfactSearchService<T extends OpenfactResource, L extends Array<T>,
  S extends SearchResults<T>> extends RESTSearchService<T, L, S>{

  constructor(openfactRestangular: Restangular) {
    super(openfactRestangular);
  }

  protected get searchPath(): string { return 'search'; };

}
