import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { OrganizationStore } from './../../../../core/store/organization.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-additional-information-page',
  templateUrl: './additional-information-page.component.html',
  styleUrls: ['./additional-information-page.component.scss']
})
export class SettingsAdditionalInformationPageComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(store: OrganizationStore, route: ActivatedRoute) {
    this.idSubscription = route.parent.parent.params.pluck<Params, string>('organization')
      .map((id) => store.load(id))
      .subscribe();
  }

  ngOnInit() { }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }

}
