import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from "rxjs/Subscription";
import { UserStore } from './../../../../../core/store/user.store';

@Component({
  selector: 'openfact-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(store: UserStore, route: ActivatedRoute) {
    this.idSubscription = route.params.pluck<Params, string>('user')
      .map((id) => store.load(id))
      .subscribe();
  }

  ngOnInit() {
  }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }

}
