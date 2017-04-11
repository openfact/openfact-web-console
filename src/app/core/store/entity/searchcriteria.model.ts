import { Paging } from './paging.model';

export interface SearchCriteria {
  filterText?: string;
  filters?: Array<any>;
  orders?: Array<any>;
  paging: Paging;
}
