import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { OrganizationStore } from './../../../core/store/organization.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(store: OrganizationStore, route: ActivatedRoute) {
    this.idSubscription = route.params.pluck<Params, string>('organization')
      .map((id) => store.load(id))
      .subscribe();
  }

  ngOnInit() { }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }

}
