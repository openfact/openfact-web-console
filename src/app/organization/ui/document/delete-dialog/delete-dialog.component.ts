import { Component, OnInit } from '@angular/core';

import { Document } from './../../../../core/models/document.model';
import { DocumentService } from './../../../../core/services/document.service';
import { DocumentStore } from './../../../../core/store/document.store';

@Component({
  selector: 'openfact-delete-document-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DocumentDeleteDialogComponent implements OnInit {

  document: Document = new Document();
  modal: any;

  constructor(private documentService: DocumentService, private documentStore: DocumentStore) {
  }

  ngOnInit() { }

  ok() {
    console.log('deleting document ' + this.document.documentId);
    this.modal.hide();
    this.documentService.delete(this.document).subscribe(
      () => {
        this.documentStore.loadAll();
      },
    );
  }

  close() {
    this.modal.close();
  }

}
