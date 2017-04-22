import { Component, OnInit } from '@angular/core';

import { Document } from './../../../../core/models/document.model';
import { DocumentStore } from './../../../../core/store/document.store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'openfact-document-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss']
})
export class DocumentViewWrapperComponent implements OnInit {

  document: Observable<Document>;

  constructor(private store: DocumentStore) { }

  ngOnInit() {
    this.document = this.store.resource;
  }

}
