import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Document, Documents } from './../../../../core/models/document.model';

import { DocumentDeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { DocumentStore } from './../../../../core/store/document.store';
import { Pagination } from './../../../../core/store/entity/pagination.store';

@Component({
  selector: 'openfact-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocumentsListComponent implements OnInit {

  @Input()
  documents: Documents;

  @Input()
  loading: boolean;

  @ViewChild(DocumentDeleteDialogComponent)
  deleteDialog: DocumentDeleteDialogComponent;

  pagination: Pagination;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: DocumentStore) {
    this.pagination = store.pagination;
  }

  ngOnInit() { }

  openDeleteDialog(deleteDocumentModal, document) {
    this.deleteDialog.modal = deleteDocumentModal;
    this.deleteDialog.document = document;
    deleteDocumentModal.show();
  }

  view(document: Document) {
    this.router.navigate([document.id], { relativeTo: this.route });
  }

  edit(document: Document) {
    this.router.navigate([document.id, 'edit'], { relativeTo: this.route });
  }

}
