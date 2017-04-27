import { Component, OnInit } from '@angular/core';

import { Document } from './../../../../core/models/document.model';
import { DocumentService } from './../../../../core/services/document.service';
import { DocumentStore } from './../../../../core/store/document.store';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'openfact-send-to-custom-party-dialog',
  templateUrl: './send-to-custom-party-dialog.component.html',
  styleUrls: ['./send-to-custom-party-dialog.component.scss']
})
export class DocumentSendToCustomPartyDialogComponent implements OnInit {

  document: Document = new Document();
  modal: any;

  customParty: any = {
    email: null
  };

  constructor(
    private documentService: DocumentService,
    private documentStore: DocumentStore,
    private toastr: ToastsManager) {
  }

  ngOnInit() { }

  send() {
    console.log('sending document ' + this.document.documentId);
    this.modal.hide();
    this.documentService.sendToCustomParty(this.document, this.customParty).subscribe(
      () => {
        this.toastr.success('Info! The document has been sended.');
      },
    );
  }

  close() {
    this.modal.hide();
  }

}
