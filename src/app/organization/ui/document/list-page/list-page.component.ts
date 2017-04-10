import { Component, OnInit } from '@angular/core';

import { DocumentStore } from './../../../../core/store/document.store';
import { Documents } from './../../../../core/models/document.model';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'openfact-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class DocumentsListPageComponent implements OnInit {

  private readonly documents: Observable<Documents>;
  private readonly loading: Observable<boolean>;

  constructor(private documentStore: DocumentStore) {
    this.documents = this.documentStore.list;
    this.loading = this.documentStore.loading;
  }

  ngOnInit() {
    this.documentStore.loadAll();
  }

}
