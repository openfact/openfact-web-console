import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { DocumentStore } from './../../../../core/store/document.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class DocumentViewPageComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(store: DocumentStore, route: ActivatedRoute) {
    this.idSubscription = route.params.pluck<Params, string>('document')
      .map((id) => store.load(id))
      .subscribe();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

}
