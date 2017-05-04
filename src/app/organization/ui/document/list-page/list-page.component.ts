import { Component, OnInit } from '@angular/core';
import { Document, Documents } from './../../../../core/models/document.model';

import { DocumentStore } from './../../../../core/store/document.store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'openfact-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class DocumentsListPageComponent implements OnInit {

  readonly documents: Observable<Documents>;
  readonly loading: Observable<boolean>;

  constructor(private documentStore: DocumentStore) {
    this.documents = this.documentStore.list;
    this.loading = this.documentStore.loading;
  }

  ngOnInit() {
    this.documentStore.loadAll();
  }

}
