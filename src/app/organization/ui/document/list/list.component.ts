import { Component, Input, OnInit } from '@angular/core';

import { Documents } from './../../../../core/models/document.model';

@Component({
  selector: 'openfact-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocumentsListComponent implements OnInit {

  parentLink: string;

  @Input()
  documents: Documents;

  @Input() loading: boolean;

  //@ViewChild(NamespaceDeleteDialog) deleteDialog: NamespaceDeleteDialog;

  constructor(/*parentLinkFactory: ParentLinkFactory*/) {
    //this.parentLink = parentLinkFactory.parentLink;
  }

  ngOnInit() { }

  openDeleteDialog(deleteNamespaceModal, namespace) {
    //this.deleteDialog.modal = deleteNamespaceModal;
    //this.deleteDialog.namespace = namespace;
    deleteNamespaceModal.open();
  }

}
