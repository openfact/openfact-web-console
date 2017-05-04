import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Document } from './../../../../core/models/document.model';
import { DocumentDeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { DocumentSendToCustomPartyDialogComponent } from './../send-to-custom-party-dialog/send-to-custom-party-dialog.component';
import { DocumentService } from './../../../../core/services/document.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { saveAs } from 'file-saver';

@Component({
  selector: 'openfact-document-view-toolbar',
  templateUrl: './view-toolbar.component.html',
  styleUrls: ['./view-toolbar.component.scss']
})
export class DocumentViewToolbarComponent implements OnInit {

  @Input()
  document: Document;

  @ViewChild(DocumentDeleteDialogComponent)
  deleteDialog: DocumentDeleteDialogComponent;

  @ViewChild(DocumentSendToCustomPartyDialogComponent)
  sendToCustomPartyDialog: DocumentSendToCustomPartyDialogComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private toastr: ToastsManager) { }

  ngOnInit() {
  }

  openDeleteDialog(deleteDocumentModal) {
    this.deleteDialog.modal = deleteDocumentModal;
    this.deleteDialog.document = this.document;
    this.deleteDialog.redirect = true;
    deleteDocumentModal.show();
  }

  sendToCustomer() {
    this.documentService.sendToCustomer(this.document).subscribe((response) => {
      this.toastr.success('Info! Document has been sended.');
    });
  }

  openSendToCustomPartyDialog(sendToCustomPartyModal) {
    this.sendToCustomPartyDialog.modal = sendToCustomPartyModal;
    this.sendToCustomPartyDialog.document = this.document;
    sendToCustomPartyModal.show();
  }

  downloadXml() {
    this.documentService.obtainXml(this.document).subscribe((res: Response) => {
      const contentDisposition = res.headers.get('Content-Disposition');
      let filename = this.document.documentId + '.xml';
      if (contentDisposition) {
        filename = res.headers.get('Content-Disposition').match(/filename=(.*)/)[1];
      }
      const file = new Blob([res.blob()], { type: res.headers.get('Content-Type') });
      saveAs(file, filename);
    });
  }

  downloadPdf() {
    this.documentService.obtainReport(this.document).subscribe((res: Response) => {
      const contentDisposition = res.headers.get('Content-Disposition');
      let filename = this.document.documentId + '.pdf';
      if (contentDisposition) {
        filename = res.headers.get('Content-Disposition').match(/filename=(.*)/)[1];
      }
      const file = new Blob([res.blob()], { type: res.headers.get('Content-Type') });
      saveAs(file, filename);
    });
  }

}
