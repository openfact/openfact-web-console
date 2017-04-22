import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Document } from './../../../../core/models/document.model';
import { Router } from '@angular/router';

@Component({
  selector: 'openfact-document-view-toolbar',
  templateUrl: './view-toolbar.component.html',
  styleUrls: ['./view-toolbar.component.scss']
})
export class DocumentViewToolbarComponent implements OnInit {

  @Input()
  document: Document;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

}
