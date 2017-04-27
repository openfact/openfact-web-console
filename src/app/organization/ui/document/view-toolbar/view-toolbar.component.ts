import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Document } from './../../../../core/models/document.model';
import { DocumentDeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { DocumentService } from './../../../../core/services/document.service';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentService: DocumentService) { }

  ngOnInit() {
  }

  openDeleteDialog(deleteDocumentModal) {
    this.deleteDialog.modal = deleteDocumentModal;
    this.deleteDialog.document = this.document;
    deleteDocumentModal.show();
  }

  downloadXml() {
    this.documentService.downloadXml(this.document.id);
  }

  downloadPdf() {

  }

}
