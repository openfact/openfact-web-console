import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DocumentStore } from './../../../../core/store/document.store';

@Component({
  selector: 'openfact-documents-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class DocumentsListToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentStore: DocumentStore) { }

  ngOnInit() {
  }

  createDocument() {
    this.router.navigate(['./create'], { relativeTo: this.route });
  }

  uploadDocument() {
    this.router.navigate(['./upload'], { relativeTo: this.route });
  }

  search() {
    this.documentStore.reload();
  }

}
