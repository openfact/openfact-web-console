import { Component, OnInit } from '@angular/core';
import { SearchCriteria, SearchCriteriaWrapper } from './../../../../core/store/entity/searchcriteria.model';

import { Document } from './../../../../core/models/document.model';
import { DocumentStore } from './../../../../core/store/document.store';
import { Observable } from 'rxjs/Rx';
import { SearchResults } from './../../../../core/store/entity/searchresults.model';

@Component({
  selector: 'openfact-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class DocumentsListPageComponent implements OnInit {

  private readonly search: Observable<SearchResults<Document>>;
  private readonly loading: Observable<boolean>;
  private readonly criteria: SearchCriteriaWrapper<Document, SearchCriteria<Document>, SearchResults<Document>>;

  constructor(private documentStore: DocumentStore) {
    this.search = this.documentStore.search;
    this.loading = this.documentStore.loading;
    this.criteria = this.documentStore.criteria;
  }

  ngOnInit() {
    this.documentStore.searchAll();
  }

}
