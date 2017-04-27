import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Document } from './../../../../core/models/document.model';
import { DocumentService } from './../../../../core/services/document.service';
import { DocumentStore } from './../../../../core/store/document.store';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'openfact-delete-document-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DocumentDeleteDialogComponent implements OnInit {

  document: Document = new Document();
  modal: any;

  redirect = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private documentStore: DocumentStore,
    private toastr: ToastsManager) {
  }

  ngOnInit() { }

  ok() {
    console.log('deleting document ' + this.document.documentId);
    this.modal.hide();
    this.documentService.delete(this.document).subscribe(
      () => {
        this.toastr.success('Success! The document has been deleted.');
        if (this.redirect) {
          this.router.navigate(['../'], { relativeTo: this.route });
        } else {
          this.documentStore.reload();
        }
      },
    );
  }

  close() {
    this.modal.hide();
  }

}
