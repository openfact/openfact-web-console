import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DocumentCriteria } from './../../../../core/store/document.criteria';
import { DocumentStore } from './../../../../core/store/document.store';

@Component({
  selector: 'openfact-documents-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class DocumentsListToolbarComponent implements OnInit {

  private criteria: DocumentCriteria;

  query = {
    filtertext: null
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentStore: DocumentStore) {
    this.criteria = this.documentStore.criteria;
  }

  ngOnInit() {
  }

  createDocument() {
    this.router.navigate(['./create'], { relativeTo: this.route });
  }

  uploadDocument() {
    this.router.navigate(['./upload'], { relativeTo: this.route });
  }

  search() {
    if (this.query.filtertext) {
      this.documentStore.criteria.addQuery('filtertext', this.query.filtertext);
    } else {
      this.documentStore.criteria.removeQuery('filtertext');
    }
  }

}
