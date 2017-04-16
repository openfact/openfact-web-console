import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Document } from './../../../../core/models/document.model';
import { DocumentDeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { DocumentStore } from './../../../../core/store/document.store';
import { Paging } from './../../../../core/store/entity/paging.model';
import { SearchResults } from './../../../../core/store/entity/search.model';

@Component({
  selector: 'openfact-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocumentsListComponent implements OnInit {

  parentLink: string;

  @Input()
  search: SearchResults<Document>;

  @Input()
  loading: boolean;

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
    deleteDocumentModal.shown();
  }

  changePage(page: number) {
    this.store.changePage(page);
  }

  changePageSize(pageSize: number) {
    this.store.changePageSize(pageSize);
  }

  view(document: Document) {
    this.router.navigate([document.id], { relativeTo: this.route })
  }

  edit(document: Document) {
    this.router.navigate([document.id, 'edit'], { relativeTo: this.route })
  }

}
