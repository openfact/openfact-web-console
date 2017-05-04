import { Component, OnInit } from '@angular/core';

import { Document } from './../../../../core/models/document.model';
import { DocumentStore } from './../../../../core/store/document.store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'openfact-document-view-wrapper-send-events',
  templateUrl: './view-wrapper-send-events.component.html',
  styleUrls: ['./view-wrapper-send-events.component.scss']
})
export class DocumentViewWrapperSendEventsComponent implements OnInit {

  document: Observable<Document>;

  constructor(private store: DocumentStore) { }

  ngOnInit() {
    this.document = this.store.resource;
  }

}
