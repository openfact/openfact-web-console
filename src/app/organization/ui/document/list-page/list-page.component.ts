import { Component, OnInit } from '@angular/core';

import { Document } from './../../../../core/models/document.model';
import { DocumentStore } from './../../../../core/store/document.store';
import { Observable } from 'rxjs/Rx';
import { SearchResults } from './../../../../core/store/entity/search.model';

@Component({
  selector: 'openfact-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class DocumentsListPageComponent implements OnInit {

  private readonly search: Observable<SearchResults<Document>>;
  private readonly loading: Observable<boolean>;

  constructor(private documentStore: DocumentStore) {
    this.search = this.documentStore.search;
    this.loading = this.documentStore.loading;
  }

  ngOnInit() {
    this.documentStore.searchAll();
  }

}
