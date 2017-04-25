import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SearchCriteria, SearchCriteriaWrapper } from './../../../../core/store/entity/searchcriteria.model';

import { Document } from './../../../../core/models/document.model';
import { DocumentDeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { DocumentStore } from './../../../../core/store/document.store';
import { SearchResults } from './../../../../core/store/entity/searchresults.model';

@Component({
  selector: 'openfact-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocumentsListComponent implements OnInit {

  @Input()
  search: SearchResults<Document>;

  @Input()
  loading: boolean;

  @Input()
  criteria: SearchCriteriaWrapper<Document, SearchCriteria<Document>, SearchResults<Document>>;

  @ViewChild(DocumentDeleteDialogComponent)
  deleteDialog: DocumentDeleteDialogComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: DocumentStore) { }

  ngOnInit() { }

  openDeleteDialog(deleteDocumentModal, document) {
    this.deleteDialog.modal = deleteDocumentModal;
    this.deleteDialog.document = document;
    deleteDocumentModal.show();
  }

  view(document: Document) {
    this.router.navigate([document.id], { relativeTo: this.route })
  }

  edit(document: Document) {
    this.router.navigate([document.id, 'edit'], { relativeTo: this.route })
  }

}
